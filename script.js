let playerScore = 1;
let computerScore = 1;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const buttons = document.querySelectorAll("button");
const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissors_button = document.querySelector(".scissors");

function getComputerChoice() {
  if (Math.floor((Math.random() * 3) + 1) === 1) {
    return "Rock"
  } else if (Math.floor((Math.random() * 3) + 1) === 2) {
    return "Paper"
  } else {
    return "Scissors"
  }
}

function disableButtons() {
  buttons.forEach(button => {
      button.disabled = true
  })
}

function PlayRound(userChoice) {
  let playerChoice = userChoice.toLocaleLowerCase();
  let computerChoice = getComputerChoice().toLocaleLowerCase();

  if (playerChoice === computerChoice) {
  	result_p.textContent = "Tie!";
  } else if (playerChoice === "rock") {
  		if (computerChoice === "paper") {
      	result_p.textContent = "You Lose! Paper beats Rock";
        computerScore_span.textContent = computerScore++;
      } else if (computerChoice === "scissors") {
      	result_p.textContent = "You Win! Rock beats Scissors";
        userScore_span.textContent = playerScore++;
      }
  } else if (playerChoice === "paper") {
  		if (computerChoice === "scissors") {
        computerScore_span.textContent = computerScore++;
      	result_p.textContent = "You Lose! Scissors beats Paper";
      } else if (computerChoice === "rock") {
        userScore_span.textContent = playerScore++;
      	result_p.textContent = "You Win! Paper beats Rock";
      }
  } else if (playerChoice === "scissors") {
  		if (computerChoice === "rock") {
        computerScore_span.textContent = computerScore++;
      	result_p.textContent = "You Lose! Rock beats Scissors";
      } else if (computerChoice === "paper") {
        userScore_span.textContent = playerScore++;
      	result_p.textContent = "You Win! Scissors beats Paper";
      }
  }

  if (playerScore > 5) {
    result_p.textContent = "Game Over: Player Won!";
    disableButtons();
  } else if (computerScore > 5) {
    result_p.textContent = "Game Over: Computer Won!";
    disableButtons();
  }
}

function main() {
  rock_button.addEventListener("click", function() {
    console.log(PlayRound(rock_button.textContent));
  })

  paper_button.addEventListener("click", function() {
    console.log(PlayRound(paper_button.textContent));
  })

  scissors_button.addEventListener("click", function() {
    console.log(PlayRound(scissors_button.textContent));
  })
}

main();

