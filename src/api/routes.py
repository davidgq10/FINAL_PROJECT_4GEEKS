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


@api.route("/user", methods=["GET"])
def get_User():
    users=User.query.all()
    request=list(map(lambda user:user.serialize(), users))
    return jsonify(request), 200

@api.route("/user", methods=["POST"])
def create_user():
   
    data = request.get_json()
    user1= User(name=data["name"],last_name=data["last_name"] ,email=data["email"], password=data["password"])
    user_exist = User.query.get(user1.email)
    if user_exist is None:
        raise APIException('User already exists', status_code=404)
    db.session.add(user1)
    db.session.commit()
    
    return jsonify("Message: user added"), 200


if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=False)