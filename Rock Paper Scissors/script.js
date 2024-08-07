document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choices button');
    const message = document.getElementById('message');

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const getResult = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) return 'It\'s a tie!';
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    };

    choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            const playerChoice = e.target.id;
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);
            message.textContent = `Computer chose ${computerChoice}. ${result}`;
        });
    });
});
