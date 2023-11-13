from flask import Flask, request, jsonify
import os

app = Flask(__name__)


@app.route("/readfile", methods=["GET"])
def read_file():
    file_path = os.path.join(os.getcwd(), "myfile.txt")
    with open(file_path, "r") as file:
        content = file.read()
    return jsonify({"content": content})


@app.route("/writefile", methods=["POST"])
def write_file():
    file_path = os.path.join(os.getcwd() + "/data", "myfile.csv")
    data = request.get_data(as_text=True)
    with open(file_path, "w") as file:
        file.write(data)
    return jsonify({"message": "File written successfully"})
