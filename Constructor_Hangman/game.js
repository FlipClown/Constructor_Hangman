//Random word is selected and exported
var wordsToGuess = ["Roshi", "Piccolo", "Krillin", "Gohan", "Yamcha", "Chiaotzu", "Goku", "Vegeta", "Tien", "Beerus", "Whis"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;