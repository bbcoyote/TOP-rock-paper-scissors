const choiceArr = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

const getComputerChoice = () => {
  const choice = choiceArr[Math.floor(Math.random() * 3)];
  return choice;
};

const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
  } else {
    computerWins++;
  }
};

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const declareWinner = document.querySelector(".display-winner");
const resetButton = document.querySelector(".reset-game");

resetButton.addEventListener("click", () => {
  playerWins = 0;
  computerWins = 0;
  declareWinner.textContent = "";
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
  rockButton.style.display = "flex";
  paperButton.style.display = "flex";
  scissorsButton.style.display = "flex";
});

const getResults = () => {
  if (playerWins >= 5 && playerWins > computerWins) {
    declareWinner.textContent = "You Win The Game!";
    hideButtons();
  } else if (computerWins >= 5 && computerWins > playerWins) {
    declareWinner.textContent = "You Lose The Game!";
    hideButtons();
  }
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
};

const hideButtons = () => {
  rockButton.style.display = "none";
  paperButton.style.display = "none";
  scissorsButton.style.display = "none";
};

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock");
  getResults();
});

paperButton.addEventListener("click", () => {
  playRound("paper");
  getResults();
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
  getResults();
});
