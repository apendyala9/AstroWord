import express from 'express';
import { connectDb } from './dbSetup.js';
import { fillDatabase } from './fillDatabase.js';

const app = express()

app.use(express.json());

const db = connectDb();
//await fillDatabase(db);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
