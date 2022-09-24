from api.models import Place
import csv
from tqdm import tqdm
import time

def run():
    with open('Places.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Place.objects.all().delete()
        counter = 0
        for row in reader: 
            print(row)
            counter = counter + 1
            film = Place( counter, row[0], row[1], row[2], row[3], row[4], row[5], row[6])
            film.save()
    print("Complete.")
