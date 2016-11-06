$(document).ready(function() {


var words = ["STRING", "NUMBER", "OPERATORS", "STATEMENTS", "MATH", "ARRAY", "BOOLEAN", "GLOBAL", "ELEMENT", "HYPERTEXT", "CASCADING STYLE SHEETS", "DOCUMENT OBJECT MODEL"]


//this var should be a random word from the words array
var chosenWord = words[randomword()]

// this will return the corresponding letter clicked as userInput
$(.letterbtn).click(function(){
		var userInput = this.value;
})

// this should create an array with the individual characters from the chosen word.
// eg. "NUMBER" WILL BECOME wordCharacters[0]=N wordCharacters[1]=U, ETC
var wordCharacters = chosenWord.split("");





//this should return a random number between 0 and total number of game play words
//in the words array
function randomword(words.length) {
	Math.floor(Math.random() * words.length);
}





//sVart of game: click button to start
//
//crEate buttons from alphabet or use keyboard to select letters
//coYputer will choose random word or phrase from list (array)
//create array from list of words
//function that creates array(s) that contains the letters of the word(s)
//function that creates a div for each letter 
//display each div with underscore

//on letter select, strike-through letter
//if matches, display letter in corresponding div(s) of word
//if no match, update hangman image
//if wrong-guess = 8, game over, add 1 to losses
//if word completed, win, add 1 to wins


	

})