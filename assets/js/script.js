const buttons = document.getElementsByClassName("buttons");
const userScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("player-hand");
const computerImage = document.getElementById("computer-hand");
const rulesMessage = document.getElementById("message");
const posibleChoices = ["rock", "paper", "scissors", "lizard", "spock"];
let result
let computerChoice

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

    computerImage.src = `assets/images/${posibleChoices[computerChoice]}.png`;
    computerImage.alt = posibleChoices[computerChoice];
    console.log(computerChoice)

    let result = checkWinner(posibleChoices[userChoice], posibleChoices[computerChoice]);
    
    updateScores(result)
    
}
console.log(computerChoice)
function updateScores() {
    if (posibleChoices[userChoice] === posibleChoices[computerChoice])
    alert(`Draw`)

}

