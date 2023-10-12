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
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');

buttonRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {

        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch player
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    }

})