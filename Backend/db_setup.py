import sqlite3
import os

def create_db():
    """Connect to the SQLite database and create tables if they don't exist."""
    try:
        db_path = 'AstroWord.db'
        db = sqlite3.connect(db_path)
        
        # Create Planets table
        db.execute('''
            CREATE TABLE IF NOT EXISTS Planets (
                p_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                moons INTEGER NOT NULL,
                largestMoon TEXT,
                discoveredBy TEXT,
                discoveryDate TEXT,
                numberPlanetFromSun INTEGER NOT NULL
            )
        ''')
        
        # Create Moons table
        db.execute('''
            CREATE TABLE IF NOT EXISTS Moons (
                m_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                discoveredBy TEXT,
                discoveryDate TEXT,
                moonSizeRank INTEGER,
                hostPlanet TEXT NOT NULL
            )
        ''')
        
        # Create DwarfPlanets table
        db.execute('''
            CREATE TABLE IF NOT EXISTS DwarfPlanets (
                dp_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                moons INTEGER NOT NULL,
                largestMoon TEXT,
                discoveredBy TEXT,
                discoveryDate TEXT,
                numberPlanetFromSun INTEGER NOT NULL
            )
        ''')
        
        db.commit()
        return db
        
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None

def connect_db():
    """Get a database connection for Flask app."""

    def dict_factory(cursor, row):
        d = {}
        fields = [col[0] for col in cursor.description]
        for value, field in zip(row, fields):
            d[field] = value
        return d
    
    conn = sqlite3.connect('AstroWord.db')
    # Allows the database to be accessed as a dictionary
    conn.row_factory = dict_factory
    return conn
