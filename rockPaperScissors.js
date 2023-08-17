function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3)+1;
    if (decision === 3){
        console.log("Rock");
        return "rock";
    }
    else if(decision === 2){
        console.log("Paper");
        return "paper";
    } 
    else{
        console.log("Scissors");
        return "scissors";
    }  
}
function startGame(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "Tie Game"
    } 
    else if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return "Player wins, rock beats scissors";
        } else 
        return "Player lose, Paper beats rock";
    }else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "Player lose, scissors beats rock";
        }else{
            return "Player wins, scissors beats paper";
        }
    }else if(playerSelection == "paper"){
        if(computerSelection =="rock"){
            return "Player wins, paper beats rock";
        }else{
            return "Player loses, scissors beats paper";
        }
        
    }
}


const buttons = document.querySelectorAll("button.btn");
console.log(buttons);
let playerSelection;
let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection=button.id;  
    if(playerWins === 5){
        console.log("Congratulations! Player Wins!");
    }else if(computerWins ===5){
        console.log("Comp Wins :(");
    } else{
        console.log("player = " + playerSelection);
        let computerSelection = getComputerChoice();
        console.log(startGame(playerSelection, computerSelection));
        
        if(startGame(playerSelection, computerSelection).includes("win")){
            playerWins++;
            console.log("player win = "+ playerWins);
        } else if(startGame(playerSelection, computerSelection).includes("Tie")){
            console.log(playerWins,computerWins);
        }
        else{
            computerWins ++;
            console.log("computer win = " + computerWins)
        }; 
    }
    
  
            
    })

        
    });
    
    
    

