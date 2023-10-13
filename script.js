'use strict';

const currentOne = document.getElementById('current--1');
const currentZero = document.getElementById('current--0');
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.querySelector('#score--1');
const playerOne = document.querySelector('.player--1');
const playerZero = document.querySelector('.player--0');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

// helping hands
scoreOne.textContent = 0;
scoreZero.textContent = 0;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

diceEl.classList.add('hidden');

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('player--active');
    playerZero.classList.toggle('player--active');
}

function rollHandler() {
    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {

            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch player
            switchPlayer();
        }
    }

}

function holdHandler() {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {

            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`#name--${activePlayer}`).textContent = 'Winner';
            diceEl.classList.add('hidden');

        } else {
            // switch player
            switchPlayer();
        }
    }
}


buttonRoll.addEventListener('click', rollHandler);
buttonHold.addEventListener('click', holdHandler);