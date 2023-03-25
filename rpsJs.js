const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "Paper"
    }
    if (randomNumber === 3) {
        computerChoice = "Scissor"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult(){
    if (userChoice === computerChoice){
        resultDisplay.innerHTML = "Draw"
        resultDisplay.style.color = "#fce303";
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You win"
        resultDisplay.style.color = "#4efc03";
    }
    if (computerChoice === "Rock" && userChoice === "Scissor"){
        resultDisplay.innerHTML = "You lost"
        resultDisplay.style.color = "#fc0324";
    }
    if (computerChoice === "Paper" && userChoice === "Scissor"){
        resultDisplay.innerHTML = "You win"
        resultDisplay.style.color = "#4efc03";
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You lost"
        resultDisplay.style.color = "#fc0324";
    }
    if (computerChoice === "Scissor" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You lost"
        resultDisplay.style.color = "#fc0324";
    }
    if (computerChoice === "Scissor" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You win"
        resultDisplay.style.color = "#4efc03";
    }
}


