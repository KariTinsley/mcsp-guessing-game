
function randomNumber (min, max){
    let min = Math.ceil();
    let max = Math.floor();
    return Math.floor(Math.random()*(max - min + 1) + min); 
    }

function userGuesses(){
    let input = Number(prompt("Guess a number between 1 and 10"));
    return input;
}

function guessOnce(){
    let target = randomNumber();
        while(input !== target){
            }if(input < target){
                alert("Higher");
                prompt("Guess again");
            }else if (input > target){
                alert("Lower");
                prompt("Guess again");
            }else {
                alert("Correct!");
        }
}