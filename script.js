const choices = ["rock", "paper", "scissors"];
let playerScore = 0,
    computerScore = 0;

// Function returns a random element of choices array.
const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];

// Element objects
const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissors_button = document.querySelector("#scissors-button");
const score_div = document.querySelector("#score");
const current_div = document.querySelector("#current-winner");

// Event listeners
rock_button.addEventListener("click", () => {
    playRound("rock");
});
paper_button.addEventListener("click", () => {
    playRound("paper");
});
scissors_button.addEventListener("click", () => {
    playRound("scissors");
});

// Function takes one choice and determines who is the winner.
// 0 tie; 1 win; -1 lose
const playRound = (playerChoice) => {
    let computerChoice = randomChoice();

    console.log(`You: ${playerChoice} Computer: ${computerChoice}`);
    let roundWinner = determineMatchWinner(playerChoice, computerChoice);
    if (roundWinner == 1) {
        playerScore++;
        current_div.textContent = "Round won";
    } else if (roundWinner == -1) {
        computerScore++;
        current_div.textContent = "Round lost";
    } else current_div.textContent = "Tie";

    // Update score
    score_div.textContent = `Score: ${playerScore} - ${computerScore}`;
};

// Function determines the winner only
// 0 tie; 1 win; -1 lose
const determineMatchWinner = (playerChoice, computerChoice) => {
    if (playerChoice == "rock") {
        if (computerChoice == "rock") return 0;
        else if (computerChoice == "paper") return -1;
        else return 1;
    } else if (playerChoice == "paper") {
        if (computerChoice == "paper") return 0;
        else if (computerChoice == "scissors") return -1;
        else return 1;
    } else {
        if (computerChoice == "scissors") return 0;
        else if (computerChoice == "rock") return -1;
        else return 1;
    }
};
