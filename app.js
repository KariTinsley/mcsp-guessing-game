function guessOnce(input){
let target = Math.floor(Math.random*(maxNum - minNum)+minNum); 
let minNum = Math.ceil(1);
let maxNum = Math.floor(10);

input = Number(prompt("Guess a number between 1 and 10"));

if (input === target){
    window.alert("Correct!");
}if(input !== target){
}else if(input < target){
    window.alert("Higher");
    prompt("Guess again");
}else if (input > target){
    window.alert("Lower");
    prompt("Guess again");
}
}


console.log(guessOnce());