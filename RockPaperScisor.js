
    const buttonRock = document.getElementById('Rock');
    const buttonPaper = document.getElementById('Paper');
    const buttonScisors =  document.getElementById('Scissors');
    const buttonYes = document.getElementById("Yes");
    const buttonNo = document.getElementById("No");
    const PlayerScoreboard = document.getElementById("Score");
    const ComputerScoreboard = document.getElementById("Score2");
    


    buttonRock.hidden = true;
    buttonPaper.hidden = true;
    buttonScisors.hidden = true;
    buttonYes.hidden = true;
    buttonNo.hidden = true;
    PlayerScoreboard.hidden = true;
    ComputerScoreboard.hidden = true;



    buttonRock.addEventListener('click', function(){
        game("rock");
    });
    buttonPaper.addEventListener('click', function(){
        game("paper");
    });
    buttonScisors.addEventListener('click', function(){
        game("scissors");
    });
    buttonYes.addEventListener('click', () =>{
        buttonYes.hidden = true;
        buttonNo.hidden = true;
        typeEraser(header_text,"Header", 50);
    })
    
    buttonNo.addEventListener('click', () =>{
        document.hidden = true;
    })
    let i = 0;
    
    const header_text = "Do You Have What It Takes To Beat The Computer In Rock Paper Scissors...?";
    let j = header_text.length;
    const header2_text = "Choose Your Weapon";

    function typeWriter(text, id, delay){
        if(i < text.length){
            document.getElementById(id).innerHTML += text.charAt(i)
            i++;
            setTimeout( () =>{
                typeWriter(text, "Header", 50);
            }, delay)
        }else if(i === text.length && text === header_text){

            buttonYes.hidden = false;
            buttonNo.hidden = false;
        }


        
    }

    function typeEraser(text, id, delay){
        buttonNo.hidden = true;
        buttonYes.hidden = true;
        if(j>0){
            document.getElementById(id).innerHTML = text.substring(0, j-1);
            j--;
            setTimeout( () =>{
                typeEraser(header_text, "Header", 50);
            }, delay)
            
        }else if(j === 0){
            console.log("Helo");
            buttonRock.hidden = false;
            buttonPaper.hidden = false;
            buttonScisors.hidden = false;
            PlayerScoreboard.hidden = false;
            ComputerScoreboard.hidden = false;
            

            i = 0;
            typeWriter(header2_text, "Header", 50);

        }

        
        }
        

    

    
        typeWriter(header_text, "Header", 100);
    



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
    const playerScore = document.getElementById("PlayerScore");
    const computerScore = document.getElementById("ComputerScore");
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
    /*if(playercount > computercount)
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
    }*/
   
    playerScore.innerHTML = `${playercount}`;
    computerScore.innerHTML = `${computercount}`;

    if(playercount === 5)
    {
        //final.innerHTML = "You have beaten the computer";
        document.body.style.backgroundColor = "Yellow";
        window.location.href = "Player.html";
    }
    else if(computercount === 5)
    {
        //final.innerHTML = "The computer has beaten you.."
        document.body.style.backgroundColor = "Red";
        window.location.href = "Computer.html";
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