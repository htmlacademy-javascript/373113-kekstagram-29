import {isEscapeKey} from './util.js';

const bigModalPicture = document.querySelector('.big-picture');
const pictureModalOpenPicture = document.querySelector('.picture');
const pictureModalClosePicture = bigModalPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


function openPictureModal () {
  bigModalPicture.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigModalPicture.classList.add('hidden');
    }
  });
  // 1. Показать окно
  // 2. Добавить обработчики для закрытия
  // 3. Прочая логика
}

function closePictureModal () {
  bigModalPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}


pictureModalOpenPicture.addEventListener('click', () => {
  openPictureModal ();
});


pictureModalClosePicture.addEventListener('click', () => {
  closePictureModal ();
});







/*
import './similar-list.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
});
*/
