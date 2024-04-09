from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import check_password_hash
from flask_cors import CORS

import uuid

app = Flask(__name__)
CORS(app)  # Add closing parenthesis here

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/kantanka/Desktop/The-Operators-1/backend/instance/mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



    
class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    available_rooms = db.Column(db.Integer, nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=True)
    card_number = db.Column(db.String(20), nullable=False)
    expiration_date = db.Column(db.String(10), nullable=False)
    cvc = db.Column(db.String(4), nullable=False)

class Receipt(db.Model):
    ref_number = db.Column(db.String(100), primary_key=True)
    user_email = db.Column(db.Integer, db.ForeignKey('user.email'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    status = db.Column(db.String(10), nullable=False)  # 'active' or 'cancel'




# Model definitions (Room, User, Receipt, Cart) go here
# Refer to the previous example for model definitions

with app.app_context():
    db.create_all()



@app.route('/update_all_rooms', methods=['GET'])
def update_all_rooms():
    Room.query.delete()   
    db.session.add(Room(price=450, type='The Oceanfront Retreat / Diamond Tier', available_rooms=10))
    db.session.add(Room(price=400, type='The Beachside Breeze / Gold Tier', available_rooms=10))
    db.session.add(Room(price=350, type='The Coastal Escape / Silver Tier', available_rooms=10))
    db.session.add(Room(price=300, type='The Sand Dollar Haven / Copper Tier', available_rooms=10))
    db.session.commit()
    return jsonify({'message': 'Rooms updated successfully'}), 200

@app.route('/update_user_passoword', methods=['POST'])
def create_user():
    """
    Create a new user with the provided email and password.
    """
    data = request.json
    if not data or not data.get('email') or not data.get('password'): 
        return jsonify({'message': 'Fill out the information'}), 400

    # Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'User already exists'}), 400

    new_user = User(
        email=data['email'],
        password=data['password'],  # In a real app, hash this password
    )
    db.session.update(new_user)
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

@app.route('/room', methods=['GET'])
def get_room():
    try:
        room_id = request.args.get('room_id')
        room = Room.query.get(room_id)
        return jsonify({
            'id': room.id,
            'price': room.price,
            'type': room.type,
            'available_rooms': room.available_rooms
        }), 200
    except Exception:
        return jsonify({'message': 'Room not found'}), 404


@app.route('/available_rooms', methods=['GET'])
def get_available_rooms():
    rooms = Room.query.all()
    rooms_list = []
    for room in rooms:
        rooms_list.append({
            'id': room.id,
            'price': room.price,
            'type': room.type,
            'available_rooms': room.available_rooms
        })
    return jsonify(rooms_list), 200




@app.route('/checkout', methods=['POST'])
def checkout():
    data = request.json
    if not data or 'email' not in data or 'card_number' not in data or 'cvc' not in data or "card_holder_name" not in data or "expiration_date" not in data  or "room_id" not in data:
        return jsonify({'message': 'Fill out the information'}), 400


  # Create or update user
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        user = User(
            full_name=data['card_holder_name'],
            email=data['email'],
            card_number=data['card_number'],
            expiration_date=data['expiration_date'],
            cvc=data['cvc']
        )
        db.session.add(user)
        db.session.commit()

    # Update room availability
    room = Room.query.filter_by(id=data['room_id']).first()
    if not room or room.available_rooms == 0:
        return jsonify({'message': 'Room not available'}), 404
    room.available_rooms -= 1
    db.session.commit()
    
  
    # Generate reference number
    ref_number = str(uuid.uuid4())
    
    # Create new receipt
    new_receipt = Receipt(
        ref_number=ref_number,
        user_email=user.email,
        room_id=room.id,
        status='active'
    )
    db.session.add(new_receipt)
    db.session.commit()
    
    return jsonify({'message': 'Checkout successful', 'ref_number': ref_number}), 201


@app.route('/receipt', methods=['GET'])
def get_receipt():
    ref_number = request.args.get('ref_number')
    if not ref_number:
        return jsonify({'message': 'Reference number is required'}), 400
    receipt = Receipt.query.filter_by(ref_number=ref_number).first()
    if not receipt:
        return jsonify({'message': 'Receipt not found'}), 404

    room = Room.query.get(receipt.room_id)
    user = User.query.filter_by(email=receipt.user_email).first()
    return jsonify({
        'ref_number': receipt.ref_number,
        'user_email': receipt.user_email,
        'room_id': receipt.room_id,
        'room_type': room.type,
        'room_price': room.price,
        'user_full_name': user.full_name,
        'status': receipt.status
        
    }), 200


@app.route('/cancel', methods=['POST'])
def cancel():
    data = request.json
    if not data or 'ref_number' not in data:
        return jsonify({'message': 'Reference number is required'}), 400
    receipt = Receipt.query.filter_by(ref_number=data['ref_number']).first()
    if not receipt:
        return jsonify({'message': 'Receipt not found'}), 404
    receipt.status = 'cancel'
    db.session.commit()
    room = Room.query.get(receipt.room_id)
    room.available_rooms += 1
    return jsonify({'message': 'Rerservation canceled successfully'}), 200

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True,port=5001)
