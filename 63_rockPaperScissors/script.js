// ROCK PAPER SCISSOR

const choices =["rock","paper","scissors"];
const PlayerDisplay =document.getElementById("PlayerDisplay");
const ComputerDisplay =document.getElementById("ComputerDisplay");
const ResultDisplay =document.getElementById("ResultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");

let playerScore =0;
let computerScore = 0;
function PlayGame(playerChoices){
    const computerChoices = choices[Math.floor(Math.random() * 3)];
    let result ="";
    if(playerChoices === computerChoices){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoices){
            case "rock":
                result = (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                
                break;
            case "paper":
                result = (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoices === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
        }
    }
    console.log(result);
    PlayerDisplay.textContent =`PLAYER: ${playerChoices}`;
    ComputerDisplay.textContent =`COMPUTER: ${computerChoices}`;
    ResultDisplay.textContent = result;
    ResultDisplay.classList.remove("greentext","redtext");
    switch(result){
        case "YOU WIN!":
            ResultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            ResultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }
}