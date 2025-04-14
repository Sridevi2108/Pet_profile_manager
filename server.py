from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__, static_folder="static")
CORS(app)

client = MongoClient("mongodb://mongo:27017")  # for Docker networking
db = client["petDB"]
collection = db["pets"]

@app.route("/pets", methods=["GET"])
def get_pets():
    pets = list(collection.find({}, {"_id": 0}))
    return jsonify(pets)

@app.route("/pets", methods=["POST"])
def add_pet():
    data = request.get_json(force=True)
    print("📥 Data received in POST /pets:", data)

    if not data:
        print("❌ No data received. Possible JSON parsing issue.")
        return jsonify({"error": "No data received"}), 400

    collection.insert_one(data)
    return jsonify({"message": "Pet added!"})



@app.route("/pets/<int:pet_id>", methods=["DELETE"])
def delete_pet(pet_id):
    result = collection.delete_one({"id": pet_id})
    return jsonify({"message": "Pet deleted"})

@app.route("/pets/<int:pet_id>", methods=["PUT"])
def update_pet(pet_id):
    data = request.json
    result = collection.update_one({"id": pet_id}, {"$set": data})
    return jsonify({"message": "Pet updated"})

@app.route("/", methods=["GET"])
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
