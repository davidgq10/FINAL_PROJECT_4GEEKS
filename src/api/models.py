from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name= db.Column(db.String(120), unique=False, nullable=False)
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
    nombre= db.Column(db.String(120), unique=False, nullable=False)
    marca = db.Column(db.String(120), unique=False, nullable=False)
    categoria= db.Column(db.String(120), unique=False, nullable=False) 
    precio = db.Column(db.Integer, unique=False, nullable=False) 
    item = db.Column(db.Integer, unique=False, nullable=False)
    enlace= db.Column(db.String(1024), unique=False, nullable=False)
    cardid = db.Column(db.Integer, unique=False, nullable=False)
    
   
 
    
    def _repr_(self):
        return '<Product %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "marca":self.marca,
            "categoria":self.categoria,
            "precio":self.precio,
            "item":self.item,
            "enlace":self.enlace,
            "cardid":self.cardid
            
          
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
            "product_id": self.product_id
        }

class ResetPassword(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    code = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return '<ResetPassword %r>' % self.code

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "code": self.code
        }              