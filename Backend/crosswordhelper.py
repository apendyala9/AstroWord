import random


def create_setup(attr, data):

    setup = []

    for row in data:
        ran = random.randint(2, len(attr) - 1)
        setup.append({'name': row[1], 'attr': {attr[ran]: row[ran]}})
    return setup


