
function computerPlay () { // This function creates a random number, converts it into an int, and returns a string depending on the result
    let computerChoice = Math.floor(Math.random() * 3);
        return (computerChoice === 0) ? "scissors"
              :(computerChoice === 1) ? "rock"
              :"paper"
}

let playerPoints = 0; 
let computerPoints = 0;

function playRound (playerSelection, computerSelection) {  
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){//Draw condition
        return `Draw! ${playerSelection} is the same as ${computerSelection}` ;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){ //win condition
        playerPoints += 1;
        console.log(playerPoints);
        return "You win! Rock beats Scissors!" ;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerPoints += 1;
        console.log(playerPoints);
        return "You win! Scissors beats Paper!" ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerPoints += 1;
        console.log(playerPoints);
        return "You win! Paper beats Rock!" ;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){ //lose condition
        computerPoints += 1;
        return "You lose! Rock beats Scissors!" ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerPoints += 1;
        return "You lose! Scissors beats Paper!" ;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerPoints += 1;
        return "You lose! Paper beats Rock!" ;
    }
}

const RESULTS = document.querySelector("#results");
const SCORE = document.querySelector("#score");
const PARA = document.createElement("p");
const SCORE_PARA = document.createElement("p");
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


function checkPoints(){
    if( playerPoints === 5 ) {
        PARA.textContent = "You Win!";
        RESULTS.appendChild(PARA);
        SCORE_PARA.textContent = "";
        computerPoints = 0;
        playerPoints = 0;
    } else if ( computerPoints === 5) {
        PARA.textContent = "You lose!";
        RESULTS.appendChild(PARA);
        SCORE_PARA.textContent = "";
    }
};

rock.addEventListener("click", () => {
    let playerSelection = rock.id;
    let computerSelection = computerPlay();
    PARA.textContent = playRound(playerSelection, computerSelection);
    RESULTS.appendChild(PARA);
    SCORE_PARA.textContent = `Player Points: ${playerPoints} \n Computer Points: ${computerPoints}`;
    RESULTS.appendChild(SCORE_PARA);
    checkPoints();
});

paper.addEventListener("click", () => {
    let playerSelection = paper.id;
    let computerSelection = computerPlay();
    PARA.textContent = playRound(playerSelection, computerSelection);
    RESULTS.appendChild(PARA);    
    SCORE_PARA.textContent = `Player Points: ${playerPoints} \n Computer Points: ${computerPoints}`;
    RESULTS.appendChild(SCORE_PARA);
    checkPoints();
});

scissors.addEventListener("click", () => {
    let playerSelection = scissors.id;
    let computerSelection = computerPlay();
    PARA.textContent = playRound(playerSelection, computerSelection);
    RESULTS.appendChild(PARA);
    SCORE_PARA.textContent = `Player Points: ${playerPoints} \n Computer Points: ${computerPoints}`;
    RESULTS.appendChild(SCORE_PARA);
    checkPoints();
});



