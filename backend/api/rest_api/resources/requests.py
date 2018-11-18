from flask_restful import Resource, reqparse
from rest_api.helper.email import requester_confirmation, helper_confirmation
# from flask import request
# import requests
# import json


class RequesterRequest(Resource):
    def get(self):
        requester_confirmation("John Doe", "shawnyang610@gmail.com")
        return {
            "message":"message sent."
        },200


class HelperRequest(Resource):
    def get(self):
        helper_confirmation("Shawn Y", "shawnyang610@gmail.com")
        return {
            "message":"message sent."
        },200
