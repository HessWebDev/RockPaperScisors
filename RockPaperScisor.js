window.onload=function(){

    const buttonRock = document.getElementById('Rock');
    const buttonPaper = document.getElementById('Paper');
    const buttonScisors =  document.getElementById('Scisors');

    buttonRock.addEventListener('click', function(){
        game("rock");
    });
    buttonPaper.addEventListener('click', function(){
        game("paper");
    });
    buttonScisors.addEventListener('click', function(){
        game("scissors");
    });

}



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
    return choice;
}

function rockPaperScissors(a,b){
    let str = a.toLowerCase();
    let outcome;
    
    console.log(a);
    console.log(b);
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

let playercount = 0;
let computercount = 0;
function game(playerSelection){
    let winner;
    let match;
    const results = document.getElementById("Results");
    const winnerDiv = document.getElementById("Winner");
    const final = document.getElementById("Final");
    match = rockPaperScissors(playerSelection, computerPlay());
    if(match === "The Computer Won"){
        computercount = computercount +1;
    }
    else if(match === "You Beat The Computer")
        playercount = playercount + 1;
        

    console.log(playercount);
    console.log(computercount);
    if(playercount > computercount)
    {
        winnerDiv.innerHTML = "You Won!";
    }
    else if (computercount > playercount)
    {
        winnerDiv.innerHTML = "The Computer Won";
    }
    else
    {
        winnerDiv.innerHTML = "You Tied The Computer";
    }
   
    results.innerHTML = `You have ${playercount} points while the computer has ${computercount}`; 

    if(playercount === 5)
    {
        final.innerHTML = "You have beaten the computer";
    }
    else if(computercount === 5)
    {
        final.innerHTML = "The computer has beaten you.."
    }
    return ;
}

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