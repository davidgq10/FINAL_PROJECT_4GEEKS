from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name= db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    def _repr_(self):
        return '<User %r>' % self.name 

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "last_name":self.last_name,
            "email": self.email,
           
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(120), unique=True, nullable=False) 
    
    def _repr_(self):
        return '<Product %r>' % self.id

    def serialize(self):
        return {
            "id ": self.id,
            "name": self.name,
            "price":self.price,
            # do not serialize the password, its a security breach
        } 

class Wish_list(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id=db.Column(db.Integer, db.ForeignKey("product.id"))
    user_relation= db.relationship("User", lazy='subquery', backref=db.backref("Wish_list", cascade="all,delete")) 
    product_relation= db.relationship("Product", lazy='subquery', backref=db.backref("Wish_list", cascade="all,delete"))     
    
    def _repr_(self):
        return '<Wish_list %r>' % self.id 

    def serialize(self):
        return {
            "id ": self.id ,
            "user_id ": self.user_id ,
            "product_id": self.product_id,
            "user_relation":self.user_relation,
            "product_relation":self.product_relation,
            # do not serialize the password, its a security breach
        }              