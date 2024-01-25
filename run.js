const prompt = require('prompt-sync')({sigint: true});

const getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
};

const getUserChoice = function() {
    let userChoice;
    while (true) {
        userChoice = prompt('Rock, paper, or scissors? Please make a choice: ').trim().toLowerCase();

        if (userChoice === 'rock' ||
        userChoice === 'paper' ||
        userChoice === 'scissors') {
            break;
        } else {
            console.log('\n// That\'s not a valid choice. Please try again.\n');
        }
    }
    return userChoice;
};

const playRound = function() {
    let computerChoice;
    let userChoice;

    while (true) {
        computerChoice = getComputerChoice();
        userChoice = getUserChoice();
        if (computerChoice === userChoice) {
            console.log('\n// There has been a tie. Let\'s try again.\n');
            continue;
        }
        break;
    }

    if ((computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')) {
        return `\n// Congratulations! You chose ${userChoice}, and the computer threw ${computerChoice}. You win!`;
    } else {
        return `\n// The computer threw ${computerChoice}, which beats ${userChoice}. You lose. Sorry!`;
    }
};

const playGame = function() {
    console.log('// Welcome to Rock, Paper, Scissors! \n// Can you win two out of three rounds? \n// Let\'s find out!\n');
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 3; i++) {
        let result = playRound();
        console.log(result);
        if (result.includes('You win')) {
            userScore++;
        } else {
            computerScore++;
        }
        console.log(`\n//    SCORES \n\n// Computer:   ${computerScore} \n// You:        ${userScore}\n`);
    }

    if (userScore > computerScore) {
        return '// You won most of the rounds, and therefore, the game. Impressive!\n';
    } else {
        return '// Sorry. You lost the game :(\n';
    }
};

console.log(playGame());
