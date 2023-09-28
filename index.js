const choiceArr = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

const getComputerChoice = () => {
  const choice = choiceArr[Math.floor(Math.random() * 3)];
  return choice;
};

const playRound = (playerSelection, computerSelection) => {
  /* we want the logic of this function to lowercase the playerSelection input
  so if the player inputs ROCK rock will be returned.
  we also want to create a conditional for the case of player chooses rock
  and computer chooses paper to return you lose paper beats rock.
  */

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

const game = () => {
  for (i = 0; i < 5; i++) {
    playRound();
  }

  if (computerWins > playerWins) {
    console.log("computer wins");
  } else if (computerWins < playerWins) {
    console.log("You Win");
  } else if ((computerWins = playerWins)) {
    console.log("it's a tie!");
  } else {
    console.log("start a game!");
  }
  console.log(computerWins, "computer");
  console.log(playerWins, "player");
};
game();
/*
We are going to build a rock paper scissors application that is
played in the console.

we will need a way to store the user input and a computer generated input
a variable can be used to store the inputs.

we will need a function that will randomly generate the computers input
We can make an array of rock, paper, scissors and use the index of these choices
to randomly choose the computer input.
the indexes are 0, 1, 2.
we can use Math.floor(Math.random() * 2)

after making the Array of choices.
the first step will be to make a function called getComputerChoice
this function will return a random number that will choose the index of the array
of choices.
*/
