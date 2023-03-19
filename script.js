// Global Declaration (Variables to track score)
let playerScore=0
let computerScore=0


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
}


//Function to play a 5 round game 
function game(){
    for (let i = 0; i < 5; i++) {
        let computerSelection=getComputerChoice();
        let playerSelection=prompt("Enter your choice");
        playerSelection=playerSelection.toLowerCase()
        playRound(computerSelection,playerSelection)
    }
    if(playerScore>computerScore){
        console.log(`You win! The score is ${playerScore} to ${computerScore}`);
    }
    else if(computerScore>playerScore){
        console.log(`You lose! The score is ${playerScore} to ${computerScore}`);
    }
    else{
        console.log(`It's a draw! The score is ${playerScore} to ${computerScore}`)
    }
}


//Function call to play the game 
game()