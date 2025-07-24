'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  let target = event.target;

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  if (target.tagName === 'A') {
    return;
  }

  const largeImg = document.getElementById('largeImg');
  const newSrc = target.getAttribute('href');
  const newAlt = target.getAttribute('title');

  largeImg.src = newSrc;
  largeImg.alt = newAlt;
});
