
//when user makes guess
//onkeyup - If guess is correct, populate letter in blank space(s) under "word" and letters already guessed under "Letters Guessed"
//          Also update number of guesses of 15 remaining in "Number of Guesses"
//onkey - If guess is incorrect, populate letters already guessed
//          Also, update number of guesss remianing
//If player wins, populate "wins" sections with number of wins

//Use loop to move on to new game?

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerWins = 0;
var playerLosses = 0;
var guessesRemaining = 9;
var AllUserGuessesArray = []; //This is letter the user will press on keyboard ; must declare this - input as blank - line 27 will populate with a letter once the user keys up (chooses)


//Laura, feel free to delete line 18 - 26. Was playing with this function
// function reset(){ //Can try using this rather than resetting in under conditional statements, try creating a fucntion and inputting the function under each if statement. 
//     AllUserGuessesArray = 9;
//     guessesRemaining = 9;
//     userInputGuess = "";
//     updateLettersToGuess();  // not sure what to do with these 3 functions
//     GuessesLeft();
//     GuessessoFar();
// };

document.onkeyup = function(event) {
    var userInputGuess =event.key;
    // var userGuess = String.fromCharCode(event.keyCode).
    // toLowerCase(); // user types in choice & it's stored in var user Guesses
    console.log(userInputGuess);
    AllUserGuessesArray.push(userInputGuess) //this should take push value from AllUserGuessesArray into userInputGuess
    computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];  
    
    if (userInputGuess === computerGuess) { //condition for winning. comparing userGuesses to computerGuess. If they're the same...
        playerWins = playerWins +1;
        // reset(); 
        guessesRemaining = 9;     
        AllUserGuessesArray.length = [];     
    }
    else if(guessesRemaining == 0) {
        playerLosses = playerLosses + 1
        guessesRemaining = 9;
        AllUserGuessesArray.length = []; 
    }

    else if (userInputGuess !== computerGuess) {
        playerLosses = playerLosses + 1;
        guessesRemaining = 9;
    }
    var html = "<h1>The Psychic Game </h1>" + 
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Guesses so far: " +  AllUserGuessesArray +"</p>" +
    "<p>Wins: " + playerWins + "</p>" +
    "<p>Losses: " + playerLosses + "</p>" +
    "<p>Guesses Remaining: " + guessesRemaining + "</p>"

    document.querySelector("#psychicGame").innerHTML = html;
}

// document.querySelector("#guessessleft").innerHTML = guessesLeft; use this if you use functions in your if and else if statements


