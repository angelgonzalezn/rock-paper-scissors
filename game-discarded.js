// Prompt user for selection
let playerSelection = prompt('Paper, rock, or scissors... What do you pick?').toLowerCase();


// Get random computer choice
function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let computerSelection = getComputerSelection();


// Run the game
function game(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        let playAgain = confirm(`Tie! You chose ${playerSelection}, and so did the computer. Want to play again?`);
        if (playAgain) {
            playGame() // THE ERROR IS IN HERE
        } else {
            alert('All right. Thanks for playing!');
        }

    } else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock') {
        alert(`Congratulations! You chose ${playerSelection} and the computer threw ${computerSelection}. You have won!`);

    } else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper') {
        alert(`The computer threw ${computerSelection}, which beats ${playerSelection}. You lose. Sorry!`);

    } else {
        confirm('Invalid choice. Want to play again?') ? playGame() : alert('All right. Thanks for playing!');
    }
}

game(computerSelection, playerSelection);