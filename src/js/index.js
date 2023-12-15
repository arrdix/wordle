import { checkGuess, currentRow, guess } from "./checkGuess.js";
import { typeLetter, deleteLetter, renderTypingBox } from "./realtimeTyping.js";
import { randomWord } from "./dataSource.js";
import { buttons } from "./buttons.js";

export function mainGame() {
  document.addEventListener('keydown', event => {
    const letter = event.key.toUpperCase();
    
    if (event.key === 'Enter') {
      if (guess.length === 5) {
        checkGuess();
      } else {
        alert(`Oops! It's not a 5-letter-word`);
      }
    } else if (event.key === 'Backspace') {
      deleteLetter();
    } else {
      typeLetter(letter);
    }
    
  renderTypingBox(currentRow);
  })

  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      if (key.ariaLabel === 'Enter') {
        if (guess.length === 5) {
          checkGuess();
        } else {
          alert(`Oops! It's not a 5-letter-word`);
        }
      } else if (key.ariaLabel === 'Backspace') {
        deleteLetter();
      } else {
        typeLetter(key.ariaLabel);
      }
      
      renderTypingBox(currentRow);
    })
  })


  const wordElements = document.querySelectorAll('.word');
  wordElements.forEach(wordElement => {
    wordElement.textContent = randomWord.toUpperCase();
  })

  // const title = document.querySelector('.title');
  // title.textContent = randomWord.toUpperCase();

  buttons();
}