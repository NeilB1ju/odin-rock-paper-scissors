// Global Declaration (Variables to track score)
let playerScore=0;
let computerScore=0;

//To display the score and winner 
let playerScoreTracker=document.querySelector('.player-score');
let computerScoreTracker=document.querySelector('.computer-score');
let playerChoice=document.querySelector('.player-choice');
let computerChoice=document.querySelector('.computer-choice');
let winner=document.querySelector('.winner');


//Function to generate computer choice
function getComputerChoice(){
    let num=Math.floor((Math.random() * 3) + 1);
    if(num==1){
        return "rock";
    }
    else if(num==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}


//Event Listeners for player choice
let rock=document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection="rock";
    playerChoice.textContent="✊";
    playRound(getComputerChoice(),playerSelection);
});

let paper=document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection="paper";
    playerChoice.textContent="✋";
    playRound(getComputerChoice(),playerSelection);
});

let scissors=document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection="scissors";
    playerChoice.textContent="✌";
    playRound(getComputerChoice(),playerSelection);
});


//Function to decide the winner of the round
function playRound(computerSelection,playerSelection){

    //To update the player and computer choice on screen
    if(computerSelection=="rock"){
        computerChoice.textContent="✊";
    }
    if(computerSelection=="paper"){
        computerChoice.textContent="✋";
    }
    if(computerSelection=="scissors"){
        computerChoice.textContent="✌";
    }

    //To display the winner of the round
    if(playerSelection==computerSelection){
        console.log(`It's a draw! You have both selected ${playerSelection}`);
    }
    else if(playerSelection=="rock" && computerSelection=="paper"){
        console.log(`You lose! Paper beats Rock`);
        computerScore+=1;
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        console.log(`You Win! Rock beats Paper`);
        playerScore+=1;
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        console.log(`You Win! Paper beats Rock`);
        playerScore+=1;
        
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        console.log(`You lose! Scissors beats Paper`);
        computerScore+=1;
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        console.log(`You lose! Rock beats Scissors`);
        computerScore+=1;
    }
    else if(playerSelection=="scissors" && computerSelection=="paper"){
        console.log(`You Win! Scissors beats Paper`);
        playerScore+=1;
    }

    //To check if someone has won
    if(playerScore==5){
        winner.textContent="You Win!";
        playerScore=0;
        computerScore=0;
    }
    if(computerScore==5){
        winner.textContent="You Lose :(";
        playerScore=0;
        computerScore=0;
    }

    //To update the score on the screen
    computerScoreTracker.textContent=`Player Score : ${playerScore}`;
    playerScoreTracker.textContent=`Computer Score : ${computerScore}`;
}



