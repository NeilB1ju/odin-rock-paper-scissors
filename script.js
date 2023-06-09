// Global Declaration (Variables to track score)
let playerScore=0;
let computerScore=0;

//To display the score and winner 
let playerScoreTracker=document.querySelector('.player-score');
let computerScoreTracker=document.querySelector('.computer-score');
let playerChoice=document.querySelector('.player-choice');
let computerChoice=document.querySelector('.computer-choice');
let roundWinner=document.querySelector('.main-text');
let roundStatus=document.querySelector('.main-sub-text');
let modal=document.querySelector('.modal');
let modalButton=document.querySelector('.modal-button');
let modalText=document.querySelector('.modal-text');
let overlay=document.querySelector('.overlay');


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


//Function to play a round
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
        roundWinner.textContent="Its a draw!";
        roundStatus.textContent=`You have both selected ${playerSelection}`
    }
    else if(playerSelection=="rock" && computerSelection=="paper"){
        roundWinner.textContent="You lost!";
        roundStatus.textContent="Paper beats Rock";
        computerScore+=1;
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        roundWinner.textContent="You win!";
        roundStatus.textContent="Rock beats Paper";
        playerScore+=1;
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        roundWinner.textContent="You win!";
        roundStatus.textContent="Paper beats Rock";
        playerScore+=1;
        
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        roundWinner.textContent="You lost!";
        roundStatus.textContent="Scissors beats Paper";
        computerScore+=1;
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        roundWinner.textContent="You lost!";
        roundStatus.textContent="Rock beats Scissors";
        computerScore+=1;
    }
    else if(playerSelection=="scissors" && computerSelection=="paper"){
        roundWinner.textContent="You win!";
        roundStatus.textContent="Paper beats Rock";
        playerScore+=1;
    }

    //To check if someone has won
    if(playerScore==5 || computerScore==5){
        if (playerScore==5){
            modalText.textContent="You Win!";
        }
        if (computerScore==5){
            modalText.textContent="You Lose...";
        }
        modal.classList.add('active');
        overlay.classList.add('active');
        modalButton.addEventListener('click', () => {
            playerScore=0;
            computerScore=0;
            computerChoice.textContent="❔";
            playerChoice.textContent="❔";
            modal.classList.remove('active');
            overlay.classList.remove('active');
            playerScoreTracker.textContent="Player Score : ";
            computerScoreTracker.textContent="Player Score : ";
            roundWinner.textContent="Choose your weapon";
            roundStatus.textContent="First to 5 points wins the game";
        });
    }

    //To update the score on the screen
    computerScoreTracker.textContent=`Computer Score : ${computerScore}`;
    playerScoreTracker.textContent=`Player Score : ${playerScore}`;
}



