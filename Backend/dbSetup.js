import sqlite3 from 'sqlite3';


export function connectDb() {

    try {

        const db = new sqlite3.Database('AstroWord.db');

        db.run(`CREATE TABLE IF NOT EXISTS Planets (
                    p_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    moons INTEGER NOT NULL,
                    largestMoon TEXT,
                    discoveredBy TEXT,
                    discoveryDate TEXT,
                    numberPlanetFromSun INTEGER NOT NULL
                )`)
        
        db.run(`CREATE TABLE IF NOT EXISTS Moons (
                    m_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    discoveredBy TEXT,
                    discoveryDate TEXT,
                    moonSizeRank INTEGER,
                    hostPlanet TEXT NOT NULL
                )`)

        db.run(`CREATE TABLE IF NOT EXISTS DwarfPlanets (
                    dp_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    moons INTEGER NOT NULL,
                    largestMoon TEXT,
                    discoveredBy TEXT,
                    discoveryDate TEXT,
                    numberPlanetFromSun INTEGER NOT NULL
                )`)

        return db

    } catch(err) {

        console.log("Error Connecting to the DB")

    }


    return db
}

