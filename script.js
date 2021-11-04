'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 10;

const input = document.querySelector('.guess');
const numberHTML = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreHTML = document.querySelector('.score');
const highScoreHTML = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnReset = document.querySelector('.again');

const body = document.querySelector('body');

console.log(number);

function checkHandler() {
  const inputValue = Number(input.value);

  if (!inputValue) {
    message.textContent = 'No number!';
  } else if (inputValue === number) {
    message.textContent = 'Correct number!';
    numberHTML.textContent = number;
    numberHTML.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      highScoreHTML.textContent = highScore;
    }
  } else if (inputValue !== number) {
    score--;

    if (score > 0) {
      message.textContent = inputValue > number ? 'Too high' : 'Too low';
      scoreHTML.textContent = score;
    } else {
      message.textContent = 'You lost!';
      scoreHTML.textContent = 0;
    }
  }
}

function resetHandler() {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  input.value = '';
  numberHTML.textContent = '?';
  message.textContent = 'Start guessing...';
  scoreHTML.textContent = score;

  numberHTML.style.width = '15rem';
  body.style.backgroundColor = '#222';

  console.log(number);
}

btnCheck.addEventListener('click', checkHandler);
btnReset.addEventListener('click', resetHandler);
