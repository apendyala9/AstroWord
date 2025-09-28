
var clg = require("crossword-layout-generator");
var fs = require('fs');

// Read and parse the JSON file
var wordsData = JSON.parse(fs.readFileSync("../crossword_input/words_15_15_empty.json", 'utf8'));

// Convert to the format expected by crossword-layout-generator
var words = wordsData.map(item => ({
    answer: item.answer,
    clue: item.clue
}));

var layout = clg.generateLayout(words);

// Return structured data as JSON
var result = {
    success: true,
    table: layout.table,
    words: layout.result
};

console.log(JSON.stringify(result));