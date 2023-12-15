import { randomWord } from "./dataSource.js";

let correctGuess = [];
export let guess = [];
export let currentRow = 1;

export function checkGuess() {
  const splittedWord = randomWord.toUpperCase().split('');

  function checkGuessStepOne() {
    for (let i = 0; i < 5; i++) {
      if (guess[i] === splittedWord[i]) {
        renderGreenBox(i);
        renderSummaryBox(guess[i], 'green');
        // if (!correctGuess.includes(guess[i])) {
        //   correctGuess.push(guess[i]);
        // }
      } else if (splittedWord.includes(guess[i])) {
        // if (correctGuess.includes(guess[i])) {
        //   renderGreyBox(i);
        //   renderSummaryBox(guess[i], 'grey');
        // } else { }
          renderYellowBox(i);
          renderSummaryBox(guess[i], 'yellow');
      } else {
        renderGreyBox(i);
        renderSummaryBox(guess[i], 'grey');
      }
    }
  }

  function checkGuessStepTwo() {
    if (guess.join() === splittedWord.join()) {
      const modalWinning = document.querySelector('.modal-winning-container');
      modalWinning.setAttribute('class', 'modal-winning-container');
    } else if (currentRow === 6) {
      const modalLosing = document.querySelector('.modal-losing-container');
      modalLosing.setAttribute('class', 'modal-losing-container');
    } else {
      currentRow++;
      guess = [];
    }
  }

  checkGuessStepOne();
  setTimeout(() => {
    checkGuessStepTwo();
  }, 5000);
}

function renderGreenBox(i) {
  const boxElements = document.querySelectorAll(`.box-row-${currentRow}`);
  boxElements[i].setAttribute(`class`, `box box-row-${currentRow} animate__animated animate__jello animate__delay-${i}s`);
  setTimeout(() => {
    boxElements[i].classList.add('green');
  }, (i+0.2)*1000);
}

function renderYellowBox(i) {
  const boxElements = document.querySelectorAll(`.box-row-${currentRow}`);
  boxElements[i].setAttribute(`class`, `box box-row-${currentRow} animate__animated animate__jello animate__delay-${i}s`);
  setTimeout(() => {
    boxElements[i].classList.add('yellow');
  }, (i+0.2)*1000);
}

function renderGreyBox(i) {
  const boxElements = document.querySelectorAll(`.box-row-${currentRow}`);
  boxElements[i].setAttribute(`class`, `box box-row-${currentRow} animate__animated animate__jello animate__delay-${i}s`);
  setTimeout(() => {
    boxElements[i].classList.add('grey');
  }, (i+0.2)*1000);
}

function renderSummaryBox(content, color) {
  const boardSummaryContainers = document.querySelectorAll('.board-summary-container');
  boardSummaryContainers.forEach(boardSummaryContainer => {
    const boxSummary = document.createElement('div');
    boxSummary.setAttribute('class', `box-summary ${color}`);
    boxSummary.textContent = content;

    boardSummaryContainer.append(boxSummary);
  })
}