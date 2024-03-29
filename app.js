// Declaring Variables
let scores, roundScore, activePlayer, gamePlaying;

// Initialize the game
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Check if Game is being played or not
    if(gamePlaying){
        // 1. Random Number Generator
        let dice = Math.floor(Math.random()* 6) + 1;

        // 2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice +'.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if( dice !== 1){
            // 3.1 Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // 3.2 Next Player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying) {
        // 1. Add Current score to Global score
        scores[activePlayer] += roundScore;

        // 2. Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // 3.1 Next Player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // Assigning values to variables
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}