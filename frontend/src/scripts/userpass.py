#!/bin/python3
import random
import string
import os
from csv import writer, reader

def print_rows():
    with open('../data/Places.csv', 'r') as csv:
        csv_reader = reader(csv)
        for row in csv_reader:
            print(row)


def main():
    print_rows()

if __name__ == "__main__":
    main()
