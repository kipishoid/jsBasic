'use strict';

const text = document.querySelector('.text');
document.querySelector('.replace').addEventListener('click', () => {
  text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});