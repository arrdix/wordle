export function buttons() {
  const refreshButton = document.querySelector('.refresh-icon');
  refreshButton.addEventListener('click', () => {
    location.reload();
  });

  const playButtons = document.querySelectorAll('.play-button');
  playButtons.forEach((playButton) => {
    playButton.addEventListener('click', () => {
      hideAfterGameModal();
      location.reload();
    });
  });

  const noButtons = document.querySelectorAll('.no-button');
  noButtons.forEach((noButton) => {
    noButton.addEventListener('click', () => {
      hideAfterGameModal();
    });
  });

  const newButton = document.querySelector('.new');
  newButton.addEventListener('click', () => {
    location.reload();
  });

  const infoButton = document.querySelector('.info');
  infoButton.addEventListener('click', () => {
    const modalInfo = document.querySelector('.modal-container');
    modalInfo.setAttribute('class', 'modal-container');
  });

  const closeButton = document.querySelector('.close-icon');
  closeButton.addEventListener('click', () => {
    const modalInfo = document.querySelector('.modal-container');
    modalInfo.setAttribute('class', 'modal-container hide-modal');
  });

  const shareButton = document.querySelector('.share');
  shareButton.addEventListener('click', () => {
    const modeDropdownElement = document.querySelector('.share-dropdown');
    modeDropdownElement.classList.toggle('hide-dropdown');
  });

  function hideAfterGameModal() {
    const modalWinning = document.querySelector('.modal-winning-container');
    modalWinning.setAttribute('class', 'modal-winning-container hide-modal');

    const modalLosing = document.querySelector('.modal-losing-container');
    modalLosing.setAttribute('class', 'modal-losing-container hide-modal');
  }
}
