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