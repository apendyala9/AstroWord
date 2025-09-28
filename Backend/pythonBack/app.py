from flask import request, jsonify, Flask
from db_setup import connect_db
from flask_cors import CORS
import sqlite3
from crosswordhelper import crossword_generator, hint_generator, create_setup

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/crossword', methods=['POST'])
def getCrossword():
    data = request.get_json()
    topic = data['topic']
    size = data['size']

    db = connect_db()
    crossword = []
    if topic == 'Solar System':
        planet = db.execute('SELECT * FROM Planets').fetchall()
        planet = create_setup(planet)
        planet = hint_generator(planet)
        crossword = crossword_generator(planet, size)


    return jsonify(crossword)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)