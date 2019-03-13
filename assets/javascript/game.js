//alphabet array
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var remaining = 9;
var guessed = [];

var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var remainCount = document.getElementById("remaining");
var guessCount = document.getElementById("guessed");

//selects a string from the array at random
var random = alpha[Math.floor(Math.random() * alpha.length)];
console.log(random);



document.onkeyup = function (guess) {

    var userGuess = guess.key;
    guessed.push(userGuess);
    console.log(userGuess);
    //defines what happens if the user guesses the correct key
    if (userGuess == random) {
        wins++; //win counter up by one
        remaining = 9;  // resets the number of turns
        guessed = [];  //resets the letters guessed
        random = alpha[Math.floor(Math.random() * alpha.length)]; //randomly selects another letter
        console.log("WINNER " + random);
    }

    //defines what happens if the user guesses incorrectly
    if (userGuess !== random) { 
        remaining--; //remaining guesses goes down by one
    }

    //defines what happens if the user guesses wrong nine times
    if (remaining < 1) {
        losses++; //loss counter goes up by one
        remaining = 9; // resets the number of turns
        guessed = []; //resets the letters guessed
        random = alpha[Math.floor(Math.random() * alpha.length)]; //randomly selects another letter
        console.log("LOSER " + random);
    }

    winCount.textContent = wins;
    lossCount.textContent = losses;
    remainCount.textContent = remaining;
    guessCount.textContent = guessed;
}