
//when user makes guess
//onkeyup - If guess is correct, populate letter in blank space(s) under "word" and letters already guessed under "Letters Guessed"
//          Also update number of guesses of 15 remaining in "Number of Guesses"
//onkey - If guess is incorrect, populate letters already guessed
//          Also, update number of guesss remianing
//If player wins, populate "wins" sections with number of wins

//Use loop to move on to new game?
// var computerChoices = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"]
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerWins = 0
var playerLoses = 0
var guessesRemaining = 9;
var userGuessSoFar = ""; //This is letter the user will press on keyboard ; must declare this - input as blank - line 27 will populate with a letter once the user keys up (chooses)

document.onkeyup = function() {
    var userGuesses = String.fromCharCode(eventkeyCode).toLowerCase();
    var lettertoGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    userGuessSoFar.push(userGuesses)

if (userGuesses === c)
}


    