const choiceArr = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

const getComputerChoice = () => {
  const choice = choiceArr[Math.floor(Math.random() * 3)];
  return choice;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt(
    "Lets play a game of Rock, Paper, Scissors"
  ).toLowerCase();

  computerSelection = getComputerChoice();

  console.log("computer selected:", computerSelection);
  console.log("player selected:", playerSelection);

  const winMessage = `You Win! ${computerSelection} beats ${playerSelection}`;
  const loseMessage = `You Lose! ${computerSelection} loses to ${playerSelection}`;
  const tieMessage = `Tie! you both choose ${computerSelection}`;

  if (computerSelection === playerSelection) {
    console.log(tieMessage);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    console.log(winMessage);
  } else {
    computerWins++;
    console.log(loseMessage);
  }
};

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
document.body.appendChild(buttonContainer);
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
buttonContainer.append(rockButton, paperButton, scissorsButton);

rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

// const game = () => {
//   for (i = 0; i < 5; i++) {
//     playRound();
//   }

//   if (computerWins > playerWins) {
//     console.log("computer wins");
//   } else if (computerWins < playerWins) {
//     console.log("You Win");
//   } else if ((computerWins = playerWins)) {
//     console.log("it's a tie!");
//   } else {
//     console.log("start a game!");
//   }
//   console.log(computerWins, "computer");
//   console.log(playerWins, "player");
// };
// game();
