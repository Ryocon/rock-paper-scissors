confirm("Do you want to play a game?")

var userChoice = prompt("What's your choice?");

var choices = ['rock', 'paper', 'scissors']

var choicesNumber = choices.length

var randomNumber = Math.floor(Math.random() * choicesNumber)

var computerChoice = choices[randomNumber]

if (userChoice === computerChoice) {
alert('It is a tie')
} else if (userChoice == 'rock') {
    (computerChoice == 'paper')
    alert('You win')
} else if (userChoice == 'paper') {
    (computerChoice == 'rock')
    alert('You suck')
} else if (userChoice == 'scissors') {
    (computerChoice == 'paper')
    alert('You win')
} else if (userChoice == 'paper') {
    (computerChoice == 'scissors')
    alert('You suck')
} else if (userChoice == 'rock') {
    (computerChoice == 'paper')
    alert('You win')
} else {
    alert('You suck')
}

