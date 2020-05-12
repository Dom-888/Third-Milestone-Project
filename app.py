import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo

if os.path.exists("env.py"):
    import env

# Create instance of flask and assign it to "app"
app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("connection_string")

# Assign the database collection to the variable "coll"
coll = PyMongo(app).db.trailers 

# Order the collection in a printable list (for testing purpose)
coll_list = []
for dict in coll.find():
    for key, value in dict.items():
        if key != "_id":
            coll_list.append(key + " : " + str(value))

# Landing page
@app.route('/') 
@app.route('/first_function')
def first_function():
    return render_template("index.html", output = coll_list)

if __name__ == '__main__':  
    app.run(host=os.getenv("IP", "0.0.0.0"),
    port=int(os.getenv("PORT", "5000")), debug=True) # Remove dubug=True before publishing