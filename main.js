const startBtn = document.querySelector('.start');
const roundsPlayed = document.querySelector('#rounds-played');
const computerScore = document.querySelector('#computer-score');
const userScore = document.querySelector('#user-score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const roundResult = document.querySelector('#round-result');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
};

const playRound = (event) => {
    const userChoice = event.target.className;
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        roundResult.textContent = 'There has been a tie. Try again.';
    } else if (computerChoice === 'rock' && userChoice === 'paper' ||
    computerChoice === 'paper' && userChoice === 'scissors' ||
    computerChoice === 'scissors' && userChoice === 'rock') {
        roundsPlayed.textContent = parseInt(roundsPlayed.textContent) + 1;
        userScore.textContent = parseInt(userScore.textContent) + 1;
        roundResult.textContent = `You chose ${userChoice}, and the computer threw ${computerChoice}. You win!`;
    } else {
        roundsPlayed.textContent = parseInt(roundsPlayed.textContent) + 1;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        roundResult.textContent = `The computer threw ${computerChoice}, which beats ${userChoice}. You lose.`;
    }

    if (roundsPlayed.textContent === '5') {
        startBtn.toggleAttribute('disabled');
        rockBtn.toggleAttribute('disabled');
        paperBtn.toggleAttribute('disabled');
        scissorsBtn.toggleAttribute('disabled');

        if (+computerScore.textContent < +userScore.textContent) {
            roundResult.textContent = `You won most of the rounds. Impressive!`;
        } else {
            roundResult.textContent = `Sorry, you lost the game :(`;
        }
    }
};

const playGame = () => {
    startBtn.toggleAttribute('disabled');
    rockBtn.toggleAttribute('disabled');
    paperBtn.toggleAttribute('disabled');
    scissorsBtn.toggleAttribute('disabled');
    rockBtn.addEventListener('click', playRound);
    paperBtn.addEventListener('click', playRound);
    scissorsBtn.addEventListener('click', playRound);
    roundsPlayed.textContent = '0';
    computerScore.textContent = '0';
    userScore.textContent = '0';
    roundResult.textContent = 'Make your choice!';
};

startBtn.addEventListener('click', playGame);