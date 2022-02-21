const buttons = document.getElementsByClassName("buttons");
const userScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("player-hand");
const computerImage = document.getElementById("computer-hand");
const rulesMessage = document.getElementById("message");
const posibleChoices = ["rock", "paper", "scissors", "lizard", "spock"];
let computerChoice 
let userChoice 

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    })
}

function playGame(userChoice) {

    userImage.src = `assets/images/${posibleChoices[userChoice]}.png`;
    userImage.alt = posibleChoices[userChoice];
    console.log(userChoice)
    let computerChoice = Math.floor(Math.random() * 5);
    console.log(computerChoice)

    computerImage.src = `assets/images/${posibleChoices[computerChoice]}.png`;
    computerImage.alt = posibleChoices[computerChoice];
    
    let result = checkWinner(userChoice, computerChoice);

    updateScore(result)
}
function checkWinner () {
    if (userChoice === computerChoice) {
        result = "0"
        console.log(result)
    }
}
function updateScore() {
    if (result === "0") {
        userScore + 54;
        computerScore + 4;
    } if (result === "1") {
        userScore + 1;
        computerScore + 0
    }

}