
//when user makes guess
//onkeyup - If guess is correct, populate letter in blank space(s) under "word" and letters already guessed under "Letters Guessed"
//          Also update number of guesses of 15 remaining in "Number of Guesses"
//onkey - If guess is incorrect, populate letters already guessed
//          Also, update number of guesss remianing
//If player wins, populate "wins" sections with number of wins

//Use loop to move on to new game?
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"]
var guessesRemaining = 9;
var playerWins = 0
var playerLoses = 0
var userGuess = ""; //This is letter the user will press on keyboard ; must declare this - input as blank - line 27 will populate with a letter once the user keys up (chooses)
var letterToGuess = ""; //computer will choose word; player will try to uncover. computer will populate on line 20
var lettersInArray =[]; //this is an open array as the word will be randomly selected from the var options arry on line 10 - horse, pig, etc
// var wordChosen = randomWord.split(" ");
// wordChosen = ["p", "i", "g"];

letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //cpu randomly choosing elements based on total options in array
console.log(letterToGuess);
lettersInArray = letterToGuess.split("");
console.log(lettersInArray); //once a word is chosen
guessesRemaining = document.getElementById("guessesRemaining"); 
//don't use inner html we're not grabbing anything from the html, 
//we're grabbing a variable from the separate JS file!!

document.onkeyup = function() {
    // alert("You Pressed a Key!");
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    guessesRemaining.textContent = userGuess;

}


    