"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Wish_list
from api.utils import generate_sitemap, APIException

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

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=False)