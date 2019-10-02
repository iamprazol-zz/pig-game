// Declaring Variables
let scores, roundScore, activePlayer, dice;

// Assigning values to variables
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random()* 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';