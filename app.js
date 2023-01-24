function guessOnce(input){
let min = Math.ceil(1);
let max = Math.floor(10);
let target = Math.floor(Math.random()*(max - min + 1) + min); 

input = Number(window.prompt("Guess a number between 1 and 10", ""));

while(input !== target){
    }if(input < target){
    window.alert("Higher");
    window.prompt("Guess again");
    }else if (input > target){
    window.alert("Lower");
    window.prompt("Guess again");
    }
if (input === target){
        window.alert("Correct!");
    }
}


console.log(guessOnce());