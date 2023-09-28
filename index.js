const choiceArr = ["rock", "paper", "scissors"];

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
    return tieMessage;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return winMessage;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return loseMessage;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return loseMessage;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return winMessage;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return winMessage;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return loseMessage;
  }
};

const game = () => {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
};

console.log(playRound());
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
