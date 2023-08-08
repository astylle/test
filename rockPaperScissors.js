function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3)+1;
    console.log(decision);
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
        if(computerSelection == "Scissors"){
            return "Player wins, rock beats scissors";
        } else 
        return "Player lose, Paper beats rock";
    }else if(playerSelection == "scissors"){
        if(computerSelection == "Rock"){
            return "Player lose, scissors beats rock";
        }else{
            return "Player wins, scissors beats paper";
        }
    }else if(playerSelection == "paper"){
        if(computerSelection =="Rock"){
            return "Player wins, paper beats rock";
        }else{
            return "Player loses, scissors beats paper";
        }
        
    }
}

let playerSelection = prompt("Type rock, paper, or scissors").toLowerCase();
console.log("player = " + playerSelection);
const computerSelection = getComputerChoice();
console.log(startGame(playerSelection, computerSelection));