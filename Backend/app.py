from flask import request, jsonify, Flask
from db_setup import connect_db
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/crossword', methods=['POST'])
def getCrossword():
    data = request.get_json()
    topic = data['topic']
    size = data['size']

    db = connect_db()
    print(db.row_factory)
    crossword = []
    if topic == 'Solar System':
        planet_attr = db.execute('PRAGMA table_info(Planets)').fetchall()
        planet = db.execute('SELECT * FROM Planets').fetchall()


        # dwarfplanet_attr = db.execute('PRAGMA table_info(DwarfPlanets)').fetchall()
        # dwarfplanet = db.execute('SELECT * FROM DwarfPlanets').fetchall()
        # moon_attr = db.execute('PRAGMA table_info(Moons)').fetchall()
        # moon = db.execute('SELECT * FROM Moons').fetchall()
        # crossword = planet + dwarfplanet + moon

    crossword = planet
    return jsonify(crossword)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)