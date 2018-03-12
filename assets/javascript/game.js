
//when user makes guess
//onkeyup - If guess is correct, populate letter in blank space(s) under "word" and letters already guessed under "Letters Guessed"
//          Also update number of guesses of 15 remaining in "Number of Guesses"
//onkey - If guess is incorrect, populate letters already guessed
//          Also, update number of guesss remianing
//If player wins, populate "wins" sections with number of wins

//Use loop to move on to new game?
// var computerChoices = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"]
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerWins = 0
var playerLosses = 0
var guessesRemaining = 9;
var userGuesses = []; //This is letter the user will press on keyboard ; must declare this - input as blank - line 27 will populate with a letter once the user keys up (chooses)

function reset(){ //rather than resetting in under conditional statements, try creating a fucntion and inputting the function under each if statement
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLettersToGuess();
    GuessesLeft();
    GuessessoFar();
};

var updateLetterToGuess = function() {    
    // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)       
    computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];  
};

document.onkeyup = function() {
    var userGuessesSoFar = String.fromCharCode(eventkeyCode).toLowerCase(); // user types in choice & it's stored in var user Guesses
    //var computerGuesses = letterArray[Math.floor(Math.random()*letterArray.length)]; //CPU randomly chooses a letter
    updateLettersToGuess();
    userGuessSoFar.push(userGuesses) //this should take value stored value in userGuessSoFar and push to userGueses

if (userGuesses === computerGuesses) { //condition for winning. comparing userGuesses to computerGuess. If they're the same...
    playerWins++; 
    reset(); 
    updateLettersToGuess();              
}

else if (userGuesses !=== computerGuesses) {  
    playerLosses++;
    // guessesRemaining = 9;
    reset();   
    updateLettersToGuess();
}

var html = "<h1>The Psychic Game </h1>" + 
"<p>Guess what letter I'm thinking of</p>" +
"<p>Wins: " + playerWins + "</p>" +
"<p>Losses: " + playerLosses + "</p>" +
"<p>Guesses Left: " + GuessesLeft + "</p>" +
"<p>Guesses So Far: " +  GuessessoFar +"</p>";


document.querySelector("#psychicGame") = html;

// document.querySelector("#guessessleft").innerHTML = guessesLeft;


