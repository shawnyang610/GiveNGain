from flask import Flask, render_template
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from os.path import abspath, dirname
# from apscheduler.schedulers.background import BackgroundScheduler
import requests
# import csv
import json

###########################
#### config flask app ####
###########################
app = Flask(__name__)
# app.config['JSON_AS_ASCII'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['SECRET_KEY'] = 'myappsecretkey'


### web home ####
# @app.route("/")
# def home():
#     return "hello world"

@app.route("/")
def home():
  param = True
  return render_template("index.html")


@app.route("/redirect")
def redirect():
  param = False
  return render_template("index.html", param=param)

###########################
#### config database ######
##########################
basedir = abspath(dirname(__file__))

app.config['POSTGRES_USER'] = "shawn"
app.config["POSTGRES_DEFAULT_USER"] = "postgres"
app.config["POSTGRES_PASSWORD"] = "my_password"
app.config["POSTGRES_DB"]="helpnlearn-db"
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://'+ app.config['POSTGRES_USER']+":"+app.config["POSTGRES_PASSWORD"]+"@postgres:5432/"+app.config["POSTGRES_DB"]
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



db = SQLAlchemy(app)

######################
#### Mail relay ######
######################
app.config["MAIL_SERVER"]="smtp.gmail.com"
app.config["MAIL_PORT"]=465
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = "info.youcmt@gmail.com"
app.config["MAIL_PASSWORD"] = "Youcmtcmt"


########################
#### config jwt ########
#######################
# app.config["JWT_SECRET_KEY"] = "myjwtsecretkey"
# app.config["JWT_BLACKLIST_ENABLED"] =True
# app.config["JWT_BLACKLIST_TOKEN_CHECKS"] = ["access", "refresh"]

###########################
#### config api  ######
###########################
api = Api(app)

from rest_api.resources.requests import RequesterRequest, HelperRequest # noqa
api.add_resource(RequesterRequest, "/api/requester_submit")
api.add_resource(HelperRequest, "/api/helper_submit")


# from rest_api.resources.user import UserRegister, UserInfo # noqa
# api.add_resource(UserRegister, "/api/user/register")
# api.add_resource(UserInfo, "/api/user/info")

# from rest_api.resources.video import VideoInfo # noqa
# api.add_resource(VideoInfo, "/api/video/info")





####################################
#### allow rest api request header
######################################
# @app.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
#   response.headers.add('Content-Type', 'application/json; charset=utf-8')
#   return response



