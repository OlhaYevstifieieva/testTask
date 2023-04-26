/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

// popup
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-container');
  const popupButton = document.querySelector('.popup-button');
  const formPopup = document.querySelector('.form');

  document.addEventListener('mouseleave', () => {
    popup.style.display = 'flex';
  });

  setTimeout(() => {
    popup.style.display = 'flex';
  }, 20000);

  popupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    formPopup.scrollIntoView({ behavior: 'smooth' });
  });
});

// date

const div = document.getElementById('date');
const date = new Date();

date.setDate(date.getDate() - 5);

const formattedDate = date.toLocaleDateString('ru-RU');

div.textContent = `Опубликовано: ${formattedDate}`;

// timer
document.addEventListener('DOMContentLoaded', function(event) {
  let timeInSeconds = 600;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    timerElement.textContent = `${minutes}:
    ${seconds.toString().padStart(2, '0')}`;

    timeInSeconds--;

    if (timeInSeconds < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Время истекло';

      const submitButton = document.querySelector('.submit-btn');

      submitButton.disabled = true;
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
});

// form
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', async(event) => {
  event.preventDefault();

  try {
    const response = await fetch('https://example.com/submit-form', {
      method: 'POST',
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    nameInput.value = '';
    phoneInput.value = '';
  } catch (error) {
    console.error(error);
  }
});
