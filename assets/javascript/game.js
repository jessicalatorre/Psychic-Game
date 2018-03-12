
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
// var userGuess = []; //This is letter the user will press on keyboard ; must declare this - input as blank - line 27 will populate with a letter once the user keys up (chooses)

// function reset(){ //Can try using this rather than resetting in under conditional statements, try creating a fucntion and inputting the function under each if statement. 
//     totalGuesses = 9;
//     guessesRemaining = 9;
//     userGuess = [];
    // updateLettersToGuess();  // not sure what to do with these 3 functions
    // GuessesLeft();
    // GuessessoFar();
// };

// var updateLetterToGuess = function() {    
//     // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)       
    // computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];  
//};

document.onkeyup = function() {
    var userGuessesSoFar = String.fromCharCode(event.keyCode).
    toLowerCase(); // user types in choice & it's stored in var user Guesses
    console.log(userGuessesSoFar);
}
    computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];  
    //var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)]; //CPU randomly chooses a letter
    userGuessSoFar.push(userGuess) //this should take value stored value in userGuessSoFar and push to userGueses
    // updateLettersToGuess();

if (userGuess === computerGuess) { //condition for winning. comparing userGuesses to computerGuess. If they're the same...
    playerWins++; 
    // reset(); 
    guessesRemaining = 9;     
    guessesSoFar.length = 0;     
}
else if (guessesRemaining == 0) { 
    playerLosses++1;
    guessesRemaining = 0;
    userGuessSoFar.length = 0;     
}
else if (userGuess !== computerGuess) {
    guessesRemaining--;
}
var html = "<h1>The Psychic Game </h1>" + 
"<p>Guess what letter I'm thinking of</p>" +
"<p>Guesses so far: " +  GuessessoFar +"</p>"
"<p>Wins: " + playerWins + "</p>" + +
"<p>Losses: " + playerLosses + "</p>" +
"<p>Guesses Remaining" + guessesRemaining + "</p>"


document.querySelector("#psychicGame").innerHTML = html;

// document.querySelector("#guessessleft").innerHTML = guessesLeft; use this if you use functions in your if and else if statements


