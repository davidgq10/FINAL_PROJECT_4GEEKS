"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Wish_list, ResetPassword
from api.utils import generate_sitemap, APIException, ToObj
from api.email import SendEmailTemplate

import shortuuid

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

# Get all users
@api.route("/user", methods=["GET"])
def get_User():
    users=User.query.all()
    request=list(map(lambda user:user.serialize(), users))
    return jsonify(request), 200

# Create User
@api.route("/user", methods=["POST"])
def create_user():
    Name_Incoming = request.json.get("name", None)
    Email_Incoming = request.json.get("email", None)
    Lastname_Incoming = request.json.get("last_name", None)
    Password_Incoming = request.json.get("password", None)

    user_exists = User.query.filter_by(email=Email_Incoming).first()
    if user_exists is not None:
        raise APIException('User already exists', status_code=404)
    newFavorite = User(name = Name_Incoming, last_name = Lastname_Incoming, email = Email_Incoming, password = Password_Incoming)

    db.session.add(newFavorite)
    db.session.commit()

    return jsonify("Message: user added"), 200

# Update password
@api.route("/user", methods=["PUT"])
def update_password():
    Email_Incoming = request.json.get("email", None)
    Password_Incoming = request.json.get("password", None)
    user1 = User.query.filter_by(email=Email_Incoming).first()
    if user1 is None:
        raise APIException('User not found', status_code=404)

    user1.password = Password_Incoming
    db.session.commit()

    return jsonify("Password updated"), 200

@api.route('/register', methods=['POST'])
def Register():
    newUser = ToObj(request.json, User())
    userExists = User.query.filter_by(email=newUser.email).first()
    if userExists is not None:
        # the user was not found on the database
        return jsonify({"msg": "Email already registered."}), 409 
    else:
        db.session.add(newUser)
        db.session.commit()
        SendEmailTemplate('welcome', newUser.serialize(), newUser.email, f'Welcome to Easy Parts CR {newUser.nombre}!')
        return jsonify({"msg": "User added!"}), 200 

@api.route('/reset/validation', methods=['POST'])
def ResetPasswordValidation():
    email = request.json.get("email", None)
    code = request.json.get("code", None)
    resetRequest = ResetPassword.query.filter_by(email=email, code=code).first()
    if resetRequest is not None:
        db.session.delete(resetRequest)
        db.session.commit()
        return jsonify({"msg": "Invalid Code!"}), 200 
    else:
        return jsonify({"msg": "Reser request not found."}), 404

@api.route('/reset', methods=['POST'])
def ResetPassword():
    email = request.json.get("email", None)
    userExists = User.query.filter_by(email=email).first()
    if userExists is not None:
        # Generar code y relacionarlo con este correo
        code = shortuuid.uuid()
        # Buscar si ya existe un code para este email
        resetRequest = ResetPassword.query.filter_by(email=email).first()
        if resetRequest is not None:
            resetRequest.code = code
        else:
            # Crear un registro en ResetPassword
            resetRequest = ResetPassword(email=email, code=code)
            db.session.add(resetRequest)

        SendEmailTemplate('code', resetRequest.serialize(), email, f'Easy Parts CR: password recovery')
        db.session.commit()
        return jsonify({"msg": "Code was generated, check your email."}), 200 
    else:
        return jsonify({"msg": "Amil not found!"}), 404 