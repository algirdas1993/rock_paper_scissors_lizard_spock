const buttons = document.getElementsByClassName("buttons");
const userScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("player-hand");
const computerImage = document.getElementById("computer-hand");
const rulesMessage = document.getElementById("message");
const posibleChoices = ["rock", "paper", "scissors", "lizard", "spock"];


for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");
        
        playGame(userChoice);
    })
}
function playGame(userChoice) {

    // changes image, after player makes choice
    userImage.src = `assets/images/${posibleChoices[userChoice]}.png`;
    userImage.alt = posibleChoices[userChoice];
    
    
    let computerChoice = Math.floor(Math.random() * 5);

    // changes image, after computer makes choice
    computerImage.src = `assets/images/${posibleChoices[computerChoice]}.png`;
    computerImage.alt = posibleChoices[computerChoice];
    

    let user = parseInt(userChoice)

    
    if (user === computerChoice) {
        rulesMessage.innerHTML = `Draw!`;
        // if player chooses rock
    }if (user === 0 && computerChoice === 2) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 0 && computerChoice === 3) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 0 && computerChoice === 4) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }if (user === 0 && computerChoice === 1) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
        // if player chooses paper
    }if (user === 1 && computerChoice === 0) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 1 && computerChoice === 4) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 1 && computerChoice === 3) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }if (user === 1 && computerChoice === 2) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
        // if player chooses scissors
    }if (user === 2 && computerChoice === 1) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 2 && computerChoice === 3) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 2 && computerChoice === 0) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }if (user === 2 && computerChoice === 4) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
        // if player chooses lizard
    }if (user === 3 && computerChoice === 1) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 3 && computerChoice === 4) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 3 && computerChoice === 2) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }if (user === 3 && computerChoice === 0) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
        // if player chooses sposk
    }if (user === 4 && computerChoice === 0) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 4 && computerChoice === 2) {
        rulesMessage.innerHTML = `You won!`;
        plusScoreUser();
    }if (user === 4 && computerChoice === 3) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }if (user === 4 && computerChoice === 1) {
        rulesMessage.innerHTML = `You lost!`;
        plusScoreComputer();
    }

}
// function for adding score after user wins.
function plusScoreUser() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}
// function for adding score to the computer score, after player looses.
function plusScoreComputer() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
