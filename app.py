import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import re
import string

if os.path.exists("env.py"):
    import env

# Create instance of flask and assign it to "app"
app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("connection_string")

# Assign the database collection to the variable "coll"
coll = PyMongo(app).db.trailers 

# Convert Youtube URLs into their embedded versions
def convert_url(url):
    if url[:24] == "https://www.youtube.com/": 
        url = url[:43] 
    elif url[:17] == "https://youtu.be/":
        url = url[:28]
    video_id = url[-11:]
    embedded_url = "https://www.youtube.com/embed/" + video_id
    return embedded_url

# Landing page
@app.route('/') 
@app.route('/get_trailers')
def get_trailers():
    return render_template("trailers.html", trailers = coll.find().sort([( '$natural', -1 )] ), n_trailers = coll.count_documents({}))

# Search trailers
@app.route('/search_trailers', methods=['POST'])
def search_trailers():
    terms_to_search = request.form.get('input-search')
    search_results = coll.find({"title": {'$regex': terms_to_search, '$options': '-i'}})
    n_search_results = coll.count_documents({"title": {'$regex': terms_to_search, '$options': '-i'}})
    return render_template("trailers.html", trailers = search_results.sort([( '$natural', -1 )] ), n_trailers = n_search_results)

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

# 404 error page
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':  
    app.run(host=os.getenv("IP", "0.0.0.0"),
    port=int(os.getenv("PORT", "5000")), debug=True) # Remove dubug=True before publishing