
function computerPlay () { // This function creates a random number, converts it into an int, and returns a string depending on the result
    let computerChoice = Math.floor(Math.random() * 3);
        return (computerChoice === 0) ? "scissors"
              :(computerChoice === 1) ? "rock"
              :(computerChoice === 2) ? "paper"
              :"scissors";
}