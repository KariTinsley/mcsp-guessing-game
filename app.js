function guessOnce(input){
let minNum = Math.ceil(1);
let maxNum = Math.floor(10);
let target = Math.floor(Math.random*(maxNum - minNum)+minNum); 

input = Number(window.prompt("Guess a number between 1 and 10", ""));

if(input !== target){
}else if(input < target){
    window.alert("Higher");
    window.prompt("Guess again");
}else if (input > target){
    window.alert("Lower");
    window.prompt("Guess again");
}else if (input === target){
    window.alert("Correct!");
}
}


console.log(guessOnce());