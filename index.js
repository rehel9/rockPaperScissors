
function computerPlay () { // This function creates a random number, converts it into an int, and returns a string depending on the result
    let computerChoice = Math.floor(Math.random() * 3);
        return (computerChoice === 0) ? "scissors"
              :(computerChoice === 1) ? "rock"
              :"paper"
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){//Draw condition
        return `Draw! ${playerSelection} is the same as ${computerSelection}` ;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){ //win condition
        return "You win! Rock beats Scissors!" ;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beats Paper!" ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock!" ;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){ //lose condition
        return "You lose! Rock beats Scissors!" ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beats Paper!" ;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats Rock!" ;
    }
}

const results = document.querySelector(".results");
const score = document.querySelector("#score");
const para = document.createElement("p");
/*
const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        computerSelection = computerPlay();
        playerSelection = button.id;
        console.log(playRound(playerSelection, computerSelection));
    });
});
*/

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")


rock.addEventListener("click", () => {
    let playerSelection = rock.id;
    let computerSelection = computerPlay();
    para.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(para);
});

paper.addEventListener("click", () => {
    let playerSelection = paper.id;
    let computerSelection = computerPlay();
    para.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(para);    
});

scissors.addEventListener("click", () => {
    let playerSelection = scissors.id;
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));    
    para.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(para);
});

