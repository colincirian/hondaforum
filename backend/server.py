from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Use SQLite as the database

db = SQLAlchemy(app)

# Define a User model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# Update the registration route to use the database
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the username is already taken
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already taken"}), 400

    # Create a new user record in the database
    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful"}), 201

if __name__ == '__main__':
    app.run(debug=True)
