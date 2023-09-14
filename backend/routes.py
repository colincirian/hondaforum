# Add this route to your Flask app for user registration

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the username is already taken (you would typically query the database here)
    if any(user['username'] == username for user in users):
        return jsonify({"message": "Username already taken"}), 400

    # Add the new user to the users list (replace this with database insertion)
    new_user = {"id": len(users) + 1, "username": username, "password": password}
    users.append(new_user)

    return jsonify({"message": "Registration successful"}), 201
