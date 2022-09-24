from django.db import models
from datetime import date
import uuid

# Create your models here.
class User(models.Model):
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username    = models.CharField(max_length=150)
    fullname    = models.CharField(max_length=200)
    dob         = models.DateField(max_length=8)
    email       = models.CharField(max_length=200)
    password    = models.CharField(max_length=200)
    added_date  = models.DateField(default=date.today)

    def get_age(self):
        today = date.today()
        try: 
            birthday = self.dob.replace(year=today.year)
        # raised when birth date is February 29 and the current year is not a leap year
        except ValueError:
            birthday = self.dob.replace(year=today.year, day=born.day-1)

        if birthday > today:
            return today.year - born.year - 1
        else:
            return today.year - born.year

    def get_user_type(self):
        return self.role
    
    def __str__(self):
        return self.username


class Place(models.Model):
    """
    can add more fields, these are just the boilerplate
    """
    id          = models.PositiveBigIntegerField(primary_key=True)
    district    = models.CharField(max_length=200)
    city        = models.CharField(max_length=200)
    name        = models.CharField(max_length=200)
    rating      = models.FloatField(default=date.today)
    description = models.CharField(max_length=1000)
    image_url   = models.CharField(max_length=200)
    link        = models.CharField(max_length=200)

    def __str__(self):
        return self.name
