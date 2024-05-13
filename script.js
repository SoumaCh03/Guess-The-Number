// let n = prompt("Hey! What is your name?")
// if (n) {
//   alert(`Welcome ${n}! You are still alive!`)
// }

// Guess the Number

// Generate a random number between 1 and 100

let number = Math.floor((Math.random() * 100 )+ 1);
// console.log(number)
let chances = 0;
let guess;

// Keep looping until the correct number is guessed
do {
  guess = prompt("Guess the number between 1 and 100");
  guess = Number.parseInt(guess);
  if (guess === number){
    alert("Congratulations! You guessed the correct number.");
  }
  else if (guess > number){
    alert("Your guess is greater than the actual number.");
  }

  else if (guess < number){
    alert("Your guess is lesser than the actual number.");
  }
  else{
    alert("Invalid input. Please enter a valid number.");
  }
  ++chances;
} while (guess !== number);

// Calculate the score
let score = 100 - chances;
// Display the result
alert(`Congratulations! The actual number was ${number} You guessed the correct number in ${chances} chances. Your score is ${score}.`)


