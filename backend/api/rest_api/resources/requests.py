from flask_restful import Resource, reqparse
from rest_api.helper.email import requester_confirmation, helper_confirmation
# from flask import request
# import requests
# import json


class RequesterRequest(Resource):
    def post(self):
        requester_confirmation("Shawn", "shawnyang610@gmail.com")
        return {
            "message":"message sent."
        },200


class HelperRequest(Resource):
    def post(self):
        helper_confirmation("MD", "shawnyang610@gmail.com")
        return {
            "message":"message sent."
        },200
