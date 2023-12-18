const choices = ["rock", "paper", "scissors"];
let playerScore = 0,
    computerScore = 0,
    play = 1;

// Function returns a random element of choices array.
const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];

// Element objects
const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissors_button = document.querySelector("#scissors-button");
const score_div = document.querySelector("#score");
const current_div = document.querySelector("#current-winner");

// Event listeners
rock_button.addEventListener("click", () => executeButton("rock"));
paper_button.addEventListener("click", () => executeButton("paper"));
scissors_button.addEventListener("click", () => executeButton("scissors"));

// Button callback function
const executeButton = (type) => {
    if (play) {
        playRound(type);
        play = checkScores();
    }
};

// Function keeps track of who is winning
const checkScores = () => {
    if (Math.max(playerScore, computerScore) < 5) return 1;
    else {
        if (playerScore > computerScore) current_div.textContent = "YOU WON";
        else if (playerScore < computerScore)
            current_div.textContent = "YOU LOST";
        else current_div = "TIE";
        return 0;
    }
};

// Function takes one choice and determines who is the winner.
// 0 tie; 1 win; -1 lose
const playRound = (playerChoice) => {
    let computerChoice = randomChoice();

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
