// Declaring Variables
let scores, roundScore, activePlayer, dice;

// Assigning values to variables
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Random Number Generator
    dice = Math.floor(Math.random()* 6) + 1;

    //2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +'.png';

    //3. Update the round score IF the rolled number was NOT a 1
    if( dice !== 1){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = none;
    }
});