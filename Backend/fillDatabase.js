import { connectDb } from './dbSetup.js';

const planets = [
    {
        name: 'Mercury',
        largestMoon: null,
        position: 1,

    },
    {
        name: 'Venus',
        largestMoon: null,
        position: 2,
    },
    {
        name: 'Earth',
        position: 3,
        largestMoon: 'Moon',
    },
    {
        name: 'Mars',
        position: 4,
        largestMoon: 'Phobos',
    },
    {
        name: 'Jupiter',
        position: 5,
        largestMoon: 'Ganymede',
    },
    {
        name: 'Saturn',
        position: 6,
        largestMoon: 'Titan',
    },
    {
        name: 'Uranus',
        position: 7,
        largestMoon: 'Titania',
    },
    {
        name: 'Neptune',
        position: 8,
        largestMoon: 'Triton',
    },
    
]

const dwarfPlanets = [

    {
        name: "Ceres",
        largestMoon: null, 
        numberDwarfPosition: 1,
      },
      {
        name: "Pluto",
        largestMoon: "Charon",
        numberDwarfPosition: 2,
      },
      {
        name: "Haumea",
        largestMoon: "Hiʻiaka",
        numberDwarfPosition: 3,
      },
      {
        name: "Makemake",
        largestMoon: "S/2015 (136472) 1 a.k.a MK2",
        numberDwarfPosition: 4,
      },
      {
        name: "Eris",
        largestMoon: "Dysnomia",
        numberDwarfPosition: 5,
      },
]

const moons = [
    { name: "Moon", }, // only moon

    // Mars
    { name: "Phobos",  rank: 1 },
    { name: "Deimos",  rank: 2 },
  
    // Jupiter (Galilean moons are the 4 largest, in order)
    { name: "Ganymede",  rank: 1 }, 
    { name: "Callisto",  rank: 2 },
    { name: "Io",  rank: 3 },
    { name: "Europa",  rank: 4 },
  
    // Saturn (largest 7 major moons shown here, in order)
    { name: "Titan",  rank: 1 },
    { name: "Rhea",  rank: 2 },
    { name: "Iapetus",  rank: 3 },
    { name: "Dione",  rank: 4 },
    { name: "Tethys",  rank: 5 },
    { name: "Enceladus",  rank: 6 },
    { name: "Mimas",  rank: 7 },
  
    // Uranus (top 5 largest)
    { name: "Titania",  rank: 1 },
    { name: "Oberon",  rank: 2 },
    { name: "Umbriel",  rank: 3 },
    { name: "Ariel",  rank: 4 },
    { name: "Miranda",  rank: 5 },
  
    // Neptune
    { name: "Triton",  rank: 1 },
  
    // Haumea
    { name: "Hiʻiaka",  rank: 1 },
    { name: "Namaka",  rank: 2 },
  
    // Eris
    { name: "Dysnomia",  rank: 1 },]

async function fillMoon() {

    const db = connectDb();

    console.log('Filling moons...');
    for (const moon of moons) {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${moon.name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        await db.run(`INSERT INTO Moons (name, discoveredBy, discoveryDate, moonSizeRank, hostPlanet) VALUES (?, ?, ?, ?, ?)`, [moon.name, data.discoveredBy, data.discoveryDate, moon.rank, data.aroundPlanet.planet]);
    }

}

async function fillDwarfPlanet() {

    const db = connectDb();

    console.log('Filling dwarf planets...');
    
    for (const dwarfPlanet of dwarfPlanets) {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${dwarfPlanet.name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        await db.run(`INSERT INTO DwarfPlanets (name, moons, largestMoon, discoveredBy, discoveryDate, numberPlanetFromSun) VALUES (?, ?, ?, ?, ?, ?)`, [dwarfPlanet.name, data.moons ? data.moons.length : 0, dwarfPlanet.largestMoon, data.discoveredBy, data.discoveryDate, dwarfPlanet.numberDwarfPosition]);
    }
}

async function fillPlanet() {

    const db = connectDb();

    console.log('Filling planets...');

    for (const planet of planets) {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${planet.name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        await db.run(`INSERT INTO Planets (name, moons, largestMoon, discoveredBy, discoveryDate, numberPlanetFromSun) VALUES (?, ?, ?, ?, ?, ?)`, [planet.name, data.moons ? data.moons.length : 0, planet.largestMoon, data.discoveredBy, data.discoveryDate, planet.position]);
    }
}


await fillMoon();
await fillDwarfPlanet();
await fillPlanet();