import { answers } from "../data/answer.js";

// Function to handle click events
const handleIconClick = (iconId, answerId) => {
  const icon = document.querySelector(iconId);
  const data = document.querySelector(answerId);

  // Check if the icon currently shows the plus icon
  const isNotClicked = icon.innerHTML.includes('icon-plus.svg');

  if (isNotClicked) {
    // Change icon to minus
    icon.innerHTML = `<img class="plus-icon-3" src="assets/images/icon-minus.svg">`;

    answers.forEach((value) => {
      if (value.id === 'id1') {
        data.innerHTML = value.answer;

      } else if (value.id === 'id2') {
        data.innerHTML = value.answer;

      } else if (value.id === 'id3') {
        data.innerHTML = value.answer;

      } else if (value.id === 'id4') {
        data.innerHTML = value.answer;
      }

    });

  } else {
    // Change icon back to plus
    icon.innerHTML = ` 
      <img class="plus-icon-3" src="assets/images/icon-plus.svg">
    `;

    // Clear the answer
    data.innerHTML = '';
  }
};

// Add event listeners for all icons
document.querySelector('.js-icon-1').addEventListener('click', () => handleIconClick('.js-icon-1', '.js-answer-1'));
document.querySelector('.js-icon-2').addEventListener('click', () => handleIconClick('.js-icon-2', '.js-answer-2'));
document.querySelector('.js-icon-3').addEventListener('click', () => handleIconClick('.js-icon-3', '.js-answer-3'));
document.querySelector('.js-icon-4').addEventListener('click', () => handleIconClick('.js-icon-4', '.js-answer-4'));