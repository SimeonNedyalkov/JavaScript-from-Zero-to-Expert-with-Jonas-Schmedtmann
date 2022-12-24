'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');
let show_modal = document.querySelectorAll('.show-modal');
for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
close_modal.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closemodal();
    }
  }
});
