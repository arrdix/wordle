import { guess } from "./checkGuess.js";

const alphabets = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

export function typeLetter(letter) {
  for (let alphabet of alphabets) {
    if (letter === alphabet && guess.length < 5) {
      guess.push(letter);
    }
  }
}

export function deleteLetter() {
  if (guess.length !== 0) {
    guess.pop();
  }
}

export function renderTypingBox(currentRow) {
  const boxElements = document.querySelectorAll(`.box-row-${currentRow}`);

  for (let i = 0; i < 5; i++) {
    if (guess[i]) {
      boxElements[i].textContent = `${guess[i]}`;
    } else {
      boxElements[i].textContent = ``;
    }
  }
}