'use strict';

const button = document.querySelector('#button-try');
const inputNumber = document.querySelector('#inputNumber');
const clueText = document.querySelector('#clue');
const attempsText = document.querySelector('#textAttemps');
let attempts = 0;

function getRandomNumber(max) {
   return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber)


function showNumber() {
   let myNumber = inputNumber.value;
   console.log(myNumber);
}

function parseIntNumber(number) {
   return parseInt(number);
}

function compareNumber() {

   attempts += 1;
   attempsText.innerHTML = `Número de intentos:  ${attempts}`;
   let myNumber = parseIntNumber(inputNumber.value);
   if (myNumber > randomNumber && myNumber < 100) {
      clueText.innerHTML = 'Demasiado alto';
   }
   else if (myNumber < randomNumber && myNumber > 0) {
      clueText.innerHTML = 'Demasiado bajo';
   }
   else if (myNumber === randomNumber) {
      clueText.innerHTML = 'Has ganado campeona!!!';
   }
   else {
      clueText.innerHTML = 'El número debe estar entre 1 y 100';
   }
}

button.addEventListener('click', showNumber);
button.addEventListener('click', compareNumber);