function getComputerChoice() {
  if (Math.floor((Math.random() * 3) + 1) === 1) {
    return "Rock"
  } else if (Math.floor((Math.random() * 3) + 1) === 2) {
    return "Paper"
  } else {
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  
  if (player === computer) {
  	return "Tie";
  } else if (player === 'rock') {
  		if (computer === "paper") {
      	return 'Computer Won';
      } else {
      	return "Player Won";
      }
  } else if (player === "paper") {
  		if (computer === "scissors") {
      	return "Computer Won";
      } else {
      	return "Player Won";
      }
  } else if (player === "scissors") {
  		if (computer === "rock") {
      	return "Computer Won";
      } else {
      	return "Player Won";
      }
  }
}

function game() {
	let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 1; i <= 5; i++) {
  	let playerChoice = prompt("Rock, Paper or Scissors");
    let result = playRound(playerChoice, getComputerChoice());
  
    if (result === "Player Won") {
      playerScore++;    
    } else if (result === "Computer Won") {
      computerScore++;
    }
  }

  if (playerScore === computerScore) {
  	console.log("Tie");
  } else if (playerScore > computerScore) {
  		console.log("The Winner is Player");
  } else {
  		console.log("The Winner is Computer");
  }
}