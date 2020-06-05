import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import json
import re
import string

if os.path.exists("env.py"):
    import env

# Create instance of flask and assign it to "app"
app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("connection_string")

# Assign the database collection to the variable "coll"
coll = PyMongo(app).db.trailers 

# Convert Youtube URL into their embedded versions
def convert_url(url):
    if len(url) > 43:
        url = url[:43] # Shorten the url in case the user copies the URl at the corresponding minute
    if url[:24] == "https://www.youtube.com/" or url[:17] == "https://youtu.be/" or url[:14] == "http://y2u.be/":
        embedded_url = "https://www.youtube.com/embed/" + url[-11:]
        return embedded_url
    else:
        return url

# Landing page
@app.route('/') 
@app.route('/get_trailers')
def get_trailers():
    reversed_coll = []
    for doc in coll.find():
        reversed_coll.insert(0, doc)
    return render_template("trailers.html", trailers = reversed_coll, n_of_trailers = len(reversed_coll))

# Search trailers
@app.route('/search_trailers', methods=['POST'])
def search_trailers():
    terms_to_search = request.form.get('input-search')
    search_results = coll.find({"title": {'$regex': terms_to_search, '$options': '-i'}})
    reversed_search_results = []
    for doc in search_results:
        reversed_search_results.insert(0, doc)
    return render_template("trailers.html", trailers = reversed_search_results, n_of_trailers = len(reversed_search_results))

# Add trailer
@app.route('/insert_trailer', methods=['POST'])
def insert_trailer():
    form_trailer = request.form.to_dict()
    form_trailer["title"] = string.capwords(form_trailer["title"])
    form_trailer["url"] = convert_url(form_trailer["url"])
    coll.insert_one(form_trailer)
    return redirect(url_for('get_trailers'))

# Delete trailer
@app.route('/delete_trailer/<trailer_id>')
def delete_trailer(trailer_id):
    coll.delete_one({"_id": ObjectId(trailer_id)})
    return redirect(url_for('get_trailers'))

# Update trailer
@app.route('/update_trailer/<trailer_id>', methods=["POST"])
def update_trailer(trailer_id):
    coll.replace_one({'_id': ObjectId(trailer_id)},
    {
        'title': string.capwords(request.form.get('title')),
        'url': convert_url(request.form.get('url')),
        'quote': request.form.get('quote'),
    })
    return redirect(url_for('get_trailers'))


if __name__ == '__main__':  
    app.run(host=os.getenv("IP", "0.0.0.0"),
    port=int(os.getenv("PORT", "5000")), debug=True) # Remove dubug=True before publishing