let firstGuess;

function userGuesses() { //prompts user and collects guess
    firstGuess = Number(prompt("Guess a number between 1 and 10"));
    return firstGuess;
}


function randomNumber(min, max) { //generates random number
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log("Random Number: " + Math.floor(Math.random() * (max - min + 1) + min));
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let targetNumber = randomNumber(1, 10);


//maybe make a singular function that incompasses both guessOnce and guessAgain
//check new guess against old conditions while guess is incorrect
//if else conditions to check if guess is correct loop stops
function guessCompare() {

    while (firstGuess !== targetNumber) {
        if (firstGuess < targetNumber) {
            alert("Higher");
            
        } else if (firstGuess > targetNumber) {//user gets it wrong after putting in a new guess, proper alert pops up then asks for a new guess
            alert("Lower");

        }
        console.log(userGuesses());//call for user input again
    }
    if(firstGuess === targetNumber){
        alert("Correct!");

    }//if guess is correct 

}
//get another input after the first input
//take new input and cycle it through guessOnce conditions

//how many tries? 
//make funciton with empty array
//add guesses to array
//if correct print "Correct! It only took you" + array.length + "guesses!"
function tries(){
let arr = [];
arr.push(firstGuess);
console.log(arr.length);
}

userGuesses();
guessCompare();
tries();