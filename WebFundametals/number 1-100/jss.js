let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount= 1 ;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses';
    }
    guesses.textContent += userGuess + '';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        last
    }
}