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

    if (userGuess == random) {
        wins++;
        remaining = 9;
        guessed = [];
        random = alpha[Math.floor(Math.random() * alpha.length)];
        console.log("WINNER " + random);
    }


    if (userGuess !== random) {
        remaining--;
    }

    if (remaining < 1) {
        losses++;
        remaining = 9;
        guessed = [];
        random = alpha[Math.floor(Math.random() * alpha.length)];
        console.log("LOSER " + random);
    }

    winCount.textContent = wins;
    lossCount.textContent = losses;
    remainCount.textContent = remaining;
    guessCount.textContent = guessed;
}