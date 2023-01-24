function guessOnce(input){
let target = Math.random();
input = Number(prompt("Guess a number between 1 and 10"));
if (input === target){
    window.alert("Correct!");
}else if(input < target){
    window.alert("Higher");
    prompt("Guess again");
}else if (input > target){
    window.alert("Lower");
    prompt("Guess again");
}
}

