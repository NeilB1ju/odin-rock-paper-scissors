// Global Declaration (Variables to track score)
let playerScore=0;
let computerScore=0;

//To display the score
let playerScoreTracker=document.querySelector('.player-score');
let computerScoreTracker=document.querySelector('.computer-score');


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
    playRound(getComputerChoice(),playerSelection);
});

let paper=document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection="paper";
    playRound(getComputerChoice(),playerSelection);
});

let scissors=document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection="scissors";
    playRound(getComputerChoice(),playerSelection);
});


//Function to decide the winner of the round
function playRound(computerSelection,playerSelection){
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
    computerScoreTracker.textContent=computerScore;
    playerScoreTracker.textContent=playerScore;
}



