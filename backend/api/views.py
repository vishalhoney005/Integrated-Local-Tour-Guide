from enum import Enum
from . models import *
from .serializers import *
from django.http import HttpResponseRedirect, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework import serializers, viewsets
from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage
from rest_framework.generics import ListAPIView
import bcrypt
from datetime import date
from django.db import models
from django.core import serializers

fs = FileSystemStorage(location='tmp/')
"""
(gokul): the reason i am doing this is to do proper checks at the frontend so to definitely
know what kind of data its getting
"""


class ApiResponseMessageType(Enum):
    CORRECT_EMAIL_AND_PASSWORD = 1
    WRONG_EMAIL_AND_PASSWORD = 2
    WRONG_PASSWORD = 3
    INPUT_FIELD_EMAIL_EMPTY = 4
    INPUT_FIELD_PASSWORD_EMPTY = 5
    UNKNOWN_MESSAGE_TYPE = 6
    USERNAME_ALREADY_TAKEN = 7
    SIGNUP_SUCCESSFULL = 8
    GET_ALL_PLACES_FROM_NAME = 9
    ALL_PLACES = 10

    def to_string(self):
        return f'{self.name}'


def api_response(messagetype: ApiResponseMessageType, data: models.Model = None) -> Response:
    response = {
        'message': messagetype.to_string(),
        'data': serializers.serialize('python', [data]) if data is not None else {}
    }
    print(response)
    return Response(response)


@api_view(['POST'])
def login(request):
    data = request.data
    email = data['email']
    password = data['password']
    if email == "":
        return api_response(ApiResponseMessageType.INPUT_FIELD_EMAIL_EMPTY)
    elif password == "":
        return api_response(ApiResponseMessageType.INPUT_FIELD_PASSWORD_EMPTY)

    for user in User.objects.all():
        if email == user.email:
            if password == user.password:
                return api_response(ApiResponseMessageType.CORRECT_EMAIL_AND_PASSWORD, user)
            else:
                return api_response(ApiResponseMessageType.WRONG_PASSWORD)
    return api_response(ApiResponseMessageType.WRONG_EMAIL_AND_PASSWORD)


@api_view(['POST'])
def signup(request):
    data = request.data
    fullname = data['fullname']
    username = data['username']
    dob = data['dob']
    email = data['email']
    password = data['password']

    user_data = User.objects.all()
    for user in user_data:
        if id == user.id:
            return api_response(ApiResponseMessageType.USERNAME_ALREADY_TAKEN)
    datas = User.objects.create(
        fullname=fullname,
        username=username,
        dob=dob,
        email=email,
        password=password,
    )
    datas.save()
    return api_response(ApiResponseMessageType.SIGNUP_SUCCESSFULL, datas)


@api_view(['GET'])
def place(request, name):
    places = Place.objects.get(title=name)
    print(places)
    return api_response(ApiResponseMessageType.GET_ALL_PLACES_FROM_NAME, places)


@api_view(['POST'])
def getplaces(request):
    places = Place.objects.all()
    serializer = PlaceSerializer(places, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def viewplaces(request):
    places = Place.objects.all()
    serializer = ViewSerializer(places, many=True)
    return Response(serializer.data)