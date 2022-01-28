function computerPlay(){
    let num = Math.floor(Math.random()*3);
    let choice;
    if(num === 0)
    {
        choice = "scissors";
    }
    else if(num === 1)
    {
        choice = "rock";
    }
    else 
    {
        choice = "paper";
    }
    alert("The Computer Chose:  " + choice);
    return choice;
}

function rockPaperScissors(a,b){
    let str = a.toLowerCase();
    let outcome;
    
    if(a === b ){
        outcome = "You Tied The Computer";
    }
    else if(a === "rock" && b === "scissors"){
        outcome = "You Beat The Computer";
    }    
    else if(a === "rock" && b === "paper"){
        outcome = "The Computer Won";
    }
    else if(a === "scissors" && b === "paper"){
        outcome = "You Beat The Computer";
    }
    else if(a === "scissors" && b === "rock"){
        outcome = "The Computer Won";
    }
    else if(a == "paper" && b == "rock"){
        outcome = "You Beat The Computer";
    }
    else if(a == "paper" && b == "scissors"){
        outcome = "The Computer Won";
    }    

    return outcome;
}
function player(){

    return window.prompt("Enter Rock, Paper, or Scissors:   ");
}

function game(){
    let winner;
    let playercount;
    let computercount;
    let match;
    for(let i = 0; i<5; i++){
        match = rockPaperScissors(player(), computerPlay());
        if(match === "The Computer Won"){
            computercount = computercount +1;
         }
        else if(match === "You Beat The Computer")
            playercount = playercount + 1;
        }

    if(playercount > computercount)
    {
        winner = "You Won!";
    }
    else if (computercount > playercount)
    {
        winner = "The Computer Won";
    }
    else
    {
        winner = "You Tied The Computer";
    }

    return winner;
}

alert(game());
/* function mover(){
     var element = document.getElementById("sqaure");
        element.style.width = "200px";
    
 }

 

 function flashing()
{
    var element = document.getElementById("square");
    if(element.style.backgroundColor === "black"){
        element.style.backgroundColor = "Yellow";
        mover();
    }
    else{
        element.style.backgroundColor = "black";
    }
  
}

var intervalID = setInterval(flashing, 1000);   */