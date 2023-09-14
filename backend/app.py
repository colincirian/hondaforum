from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension

app = Flask(__name__)
CORS(app)  # Enable CORS for your app

# Sample user data (replace with a database)
users = [
    {"id": 1, "username": "user1", "password": "password1"},
    {"id": 2, "username": "user2", "password": "password2"},
]

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = next((user for user in users if user['username'] == username and user['password'] == password), None)

    if user:
        return jsonify({"message": "Login successful", "user": user}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
