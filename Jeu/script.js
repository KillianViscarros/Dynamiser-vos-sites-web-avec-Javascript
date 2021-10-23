var game, score, scoreRound, turnPlayer;


startGame();



function startGame() {

    score = [0, 0];
    turnPlayer = 0;
    scoreRound = 0;
    game = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('turn-0').textContent = '0';
    document.getElementById('turn-1').textContent = '0';

    document.getElementById('id-0').textContent = 'Joueur 1';
    document.getElementById('id-1').textContent = 'Joueur 2';

    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-1-box').classList.remove('winner');

    document.querySelector('.player-0-box').classList.remove('point');
    document.querySelector('.player-1-box').classList.remove('point');

    document.querySelector('.player-0-box').classList.add('point');
}



function nextPlayer() {
    turnPlayer === 0 ? turnPlayer = 1 : turnPlayer = 0;
    scoreRound = 0;

    document.getElementById('turn-0').textContent = '0';
    document.getElementById('turn-1').textContent = '0';

    document.querySelector('.player-0-box').classList.toggle('point');
    document.querySelector('.player-1-box').classList.toggle('point');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', startGame);




document.querySelector('.btn-roll').addEventListener('click', function () {
    if (game) {

        // Génrration valeur de dé
        var dice = Math.floor(Math.random() * 6) + 1;

        // affichage dé
        var diceImage = document.querySelector('.dice');
        diceImage.style.display = 'block';
        diceImage.src = 'images/dice-' + dice + '.png';

        if (dice !== 1) {
            scoreRound += dice;
            document.querySelector('#turn-' + turnPlayer).textContent = scoreRound;
        } else {
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (game) {
        score[turnPlayer] += scoreRound;

        document.querySelector('#score-' + turnPlayer).textContent = score[turnPlayer];

        // le joueur dépasse 100 points
        if (score[turnPlayer] >= 100) {
            document.querySelector('#id-' + turnPlayer).textContent = 'Gagnant !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + turnPlayer + '-box').classList.add('winner');
            document.querySelector('.player-' + turnPlayer + '-box').classList.remove('point');
            game = false;
        } else {
            nextPlayer();
        }
    }
});








