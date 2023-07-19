import { isEscapeKey } from './util.js';
import { idArray } from "./data.js";

const bigModalPicture = document.querySelector('.big-picture');
const pictureModalOpenPicture = document.querySelector('.picture');
const pictureModalClosePicture = bigModalPicture.querySelector('.big-picture__cancel');

const bigPictureImg = bigModalPicture.querySelector('img');

const likesCount = bigModalPicture.querySelector('.likes-count');

const commentsCount = bigModalPicture.querySelector('.comments-count');

const socialCaption = bigModalPicture.querySelector('.social__caption');

const socialComment = bigModalPicture.querySelector('.social__comment');

const socialPicture = socialComment.querySelector('.social__picture');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


function openPictureModal() {
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

function closePictureModal() {
  bigModalPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}


pictureModalOpenPicture.addEventListener('click', () => {
  openPictureModal();
  console.log('Первый элемент' + idArray[0]);
  bigPictureImg.src = idArray[0].url;
  likesCount.textContent = idArray[0].likes;
  commentsCount.textContent = idArray[0].comments.length;
  socialCaption.textContent = idArray[0].description;
  socialPicture.src = idArray[0].comments[0].url;
});


pictureModalClosePicture.addEventListener('click', () => {
  closePictureModal();
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
