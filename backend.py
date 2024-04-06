from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import check_password_hash
from flask_cors import CORS

import uuid

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, origins={"origins": ["http://localhost:3001"]})  # Add closing parenthesis here
CORS(app, supports_credentials=True) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/kantanka/Desktop/The-Operators-1/backend/instance/mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


with app.app_context():
    db.create_all()
    
class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    available_rooms = db.Column(db.Integer, nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    card_number = db.Column(db.String(20), nullable=False)
    expiration_date = db.Column(db.String(10), nullable=False)
    cvc = db.Column(db.String(4), nullable=False)

class Receipt(db.Model):
    ref_number = db.Column(db.String(100), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    status = db.Column(db.String(10), nullable=False)  # 'active' or 'cancel'

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    number_of_rooms = db.Column(db.Integer, nullable=False)

# Model definitions (Room, User, Receipt, Cart) go here
# Refer to the previous example for model definitions





@app.route('/user', methods=['POST'])
def create_user():
    data = request.json
    if not data or not data.get('email') or not data.get('password') or not data.get("full_name") or not data.get("card_number") or not data.get("expiration_date") or not data.get("cvc"):
        return jsonify({'message': 'Fill out the information'}), 400

    # Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'User already exists'}), 400

    new_user = User(
        full_name=data['full_name'],
        email=data['email'],
        password=data['password'],  # In a real app, hash this password
        card_number=data['card_number'],
        expiration_date=data['expiration_date'],
        cvc=data['cvc']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201


@app.route('/login', methods=['POST'])
def login():
    # Extract email and password from the request
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    # Query the user by email
    user = User.query.filter_by(email=email).first()

    # If user not found or password does not match
    if user is None or not User.query.filter_by(password= password).first():
        return jsonify({'message': 'Invalid email or password'}), 401

    # Successful login
    return jsonify({
        'id': user.id,
        'full_name': user.full_name,
        'email': user.email,
        # Sensitive information like password should not be returned
    }), 200
    
    
    
    
@app.route('/room', methods=['POST'])
def create_room():
    data = request.json
    if not data or 'price' not in data or 'type' not in data or 'available_rooms' not in data:
        return jsonify({'message': 'Missing data'}), 400

    new_room = Room(
        price=data['price'],
        type=data['type'],
        available_rooms=data['available_rooms']
    )
    db.session.add(new_room)
    db.session.commit()
    return jsonify({'message': 'Room added successfully'}), 201

@app.route('/room/<int:room_id>', methods=['GET'])
def get_room(room_id):
    room = Room.query.get_or_404(room_id)
    return jsonify({
        'id': room.id,
        'price': room.price,
        'type': room.type,
        'available_rooms': room.available_rooms
    }), 200


@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.json
    if not data or 'room_id' not in data or 'user_id' not in data or 'number_of_rooms' not in data:
        return jsonify({'message': 'Missing data'}), 400

    # Optionally, check if the room exists and if the requested number of rooms is available
    room = Room.query.get(data['room_id'])
    if not room or room.available_rooms < data['number_of_rooms']:
        return jsonify({'message': 'Room not available'}), 400

    new_cart_item = Cart(
        room_id=data['room_id'],
        user_id=data['user_id'],
        number_of_rooms=data['number_of_rooms']
    )
    db.session.add(new_cart_item)
    db.session.commit()
    return jsonify({'message': 'Room added to cart successfully'}), 201


# Implementation for reading, updating, and deleting cart items can be added here






@app.route('/checkout', methods=['POST'])
def checkout():
    data = request.json
    if not data or 'user_id' not in data:
        return jsonify({'message': 'Missing user_id'}), 400

    user_id = data['user_id']
    cart_items = Cart.query.filter_by(user_id=user_id).all()
    if not cart_items:
        return jsonify({'message': 'No items in the cart'}), 400

    for item in cart_items:
        # Here, you would ideally update room availability and perform other business logic as needed.
        pass

    # For simplicity, generating a UUID for the reference number. In a real application, ensure this is unique.
    ref_number = str(uuid.uuid4())
    new_receipt = Receipt(
        ref_number=ref_number,
        user_id=user_id,
        room_id=cart_items[0].room_id,  # Assuming a single item for simplicity
        status='active'
    )
    db.session.add(new_receipt)
    db.session.commit()

    # Clear the cart after checkout
    Cart.query.filter_by(user_id=user_id).delete()
    db.session.commit()

    return jsonify({'message': 'Checkout successful', 'ref_number': ref_number}), 201

@app.route('/receipt/<string:ref_number>', methods=['GET'])
def get_receipt(ref_number):
    receipt = Receipt.query.filter_by(ref_number=ref_number).first()
    if not receipt:
        return jsonify({'message': 'Receipt not found'}), 404

    return jsonify({
        'ref_number': receipt.ref_number,
        'user_id': receipt.user_id,
        'room_id': receipt.room_id,
        'status': receipt.status
    }), 200


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
