'use strict';
let randplayer = Math.trunc(Math.random() * 2);
let dice = Math.trunc(Math.random() * 6 + 1);

// Player
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Score
const start_score_0 = 0;
const start_score_1 = 0;
const score_el0 = document.getElementById('score--0')?.textContent;
const score_el1 = document.getElementById('score--1')?.textContent;

// Current Score
const current_score_el0 = document.getElementById('current--0');
const current_score_el1 = document.getElementById('current--1');

// Buttons
const btn_roll = document.querySelector('.btn--roll');
const btn_new = document.querySelector('.btn--new');
const btn_hold = document.querySelector('.btn--hold');
// Dice
const dice_el = document.querySelector('.dice');

let total_score_player_0 = 0;
let total_score_player_1 = 0;
let current_score = 0;

// Current player
const current_player = function () {
  if (player0?.classList.contains('player--active')) {
    return 0;
  } else {
    return 1;
  }
};

// Switch player
const switch_player = function () {
  const curplyer = current_player();
  if (curplyer === 0) {
    player0.classList.remove('player--active');
    player1?.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

// game
btn_roll.addEventListener('click', function () {
  const curplyer = current_player();
  const rand_dice = Math.trunc(Math.random() * 6) + 1;
  //   dice_el.classList.remove('.hidden');
  dice_el.src = `dice-${rand_dice}.png`;
  if (curplyer === 0) {
    if (rand_dice !== 1) {
      current_score += rand_dice;
      current_score_el0.textContent = current_score;
    } else if (rand_dice === 1) {
      document.getElementById(`current--${curplyer}`).textContent = 0;
      current_score = 0;
      switch_player();
    }
  } else if (curplyer === 1) {
    if (rand_dice !== 1) {
      current_score += rand_dice;
      current_score_el1.textContent = current_score;
    } else if (rand_dice === 1) {
      document.getElementById(`current--${curplyer}`).textContent = 0;
      current_score = 0;
      switch_player();
    }
  }
});
let scores = [0, 0];
btn_hold?.addEventListener('click', function () {
  let curplayer = current_player();
  scores[curplayer] += current_score;
  document.getElementById(`score--${curplayer}`).textContent =
    scores[curplayer];
  current_score = 0;
  document.getElementById(`current--${curplayer}`).textContent = 0;
  switch_player();
  if (scores[curplayer] >= 100) {
    document.getElementById(`name--${curplayer}`).textContent = 'Winner';
  }
});
btn_new?.addEventListener('click', function () {
  scores = [0, 0];
  current_score = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
});

