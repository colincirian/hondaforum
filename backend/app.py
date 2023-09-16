from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import supabase

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Use SQLite as the database
db = SQLAlchemy(app)

# Initialize Supabase
supabase_url = os.environ.get('https://clamxcruylklcfnzoanh.supabase.co')
supabase_anon_key = os.environ.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsYW14Y3J1eWxrbGNmbnpvYW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MjE3NDMsImV4cCI6MjAxMDM5Nzc0M30.IjdFBfjX8eHxv6zCqA3MU_uV1XupNkX6gKXI05xBNwM')
supabase_client = supabase.Client(supabase_url, supabase_anon_key)

# Define a User model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# Registration endpoint
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Step 3: Use Supabase to create a new user (you can keep this part as is)
    response, error = supabase_client.auth.sign_up(username, password)

    if error:
        return jsonify({"message": "Registration failed"}), 400

    # Step 4: Save user data to a table in your database
    # Modify this part to match your database schema and save additional user data
    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful"}), 201

if __name__ == '__main__':
    app.run(debug=True)
