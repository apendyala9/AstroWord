const clg = require("crossword-layout-generator");
const fs = require('fs');

const wordsData = JSON.parse(fs.readFileSync("../crossword_input/words_empty.json", 'utf8'));

// Convert to the format expected by crossword-layout-generator
const words = wordsData.map(item => ({
    answer: item.answer,
    clue: item.clue
}));

const layout = clg.generateLayout(words);

const result = {
    success: true,
    table: layout.table,
    words: layout.result
};

console.log(JSON.stringify(result));