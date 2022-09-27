from dataclasses import field
from rest_framework import serializers
from .models import *
from rest_framework.settings import api_settings

# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        optional_fields = ['added_date']
        fields = ('id', 'username', 'fullname', 'dob', 'email', 'password')


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'

class ViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('image','title')
