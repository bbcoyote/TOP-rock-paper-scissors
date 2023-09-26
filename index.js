console.log("Hello World");

const choiceArr = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const choice = choiceArr[Math.floor(Math.random() * 3)];
  return choice;
};
console.log(getComputerChoice());
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
