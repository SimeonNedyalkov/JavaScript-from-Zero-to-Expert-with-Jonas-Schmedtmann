'use strict';
// console.log(document.querySelector('.message')?.textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message')?.textContent);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = Number(document.querySelector('.score').textContent);
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(number);

document.querySelector('.check')?.addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !!!';
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'Correct number !!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low !';
      score -= 1;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER 💥';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too high !';
      score -= 1;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER 💥';
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again')?.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  let new_number = Math.trunc(Math.random() * 20 + 1);
  number = new_number;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = `${number}`;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
