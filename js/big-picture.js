import { isEscapeKey } from './util.js';
import { idArray } from "./data.js";

const bigModalPicture = document.querySelector('.big-picture');
const pictureModalOpenPicture = document.querySelectorAll('.picture');
const pictureModalClosePicture = bigModalPicture.querySelector('.big-picture__cancel');

const bigPictureImg = bigModalPicture.querySelector('img');

const likesCount = bigModalPicture.querySelector('.likes-count');

const commentsCount = bigModalPicture.querySelector('.comments-count');

const socialCaption = bigModalPicture.querySelector('.social__caption');

const socialComments = bigModalPicture.querySelector('social__comments');

const socialComment = bigModalPicture.querySelector('.social__comment');

const socialPicture = socialComment.querySelector('.social__picture');

const socialText = document.querySelector('.social__text')

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

pictureModalOpenPicture.forEach(element => {
  element.addEventListener('click', () => {
    openPictureModal();
    bigPictureImg.src = element.querySelector('.picture__img').src;
    likesCount.textContent = element.querySelector('.picture__likes').textContent;
    socialCaption.textContent = element.querySelector('.picture__img').alt;
    bigModalPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigModalPicture.querySelector('.comments-loader').classList.add('hidden');
  });
});

socialPicture.src = idArray[0].comments[0].avatar + '.svg';
socialPicture.alt = idArray[0].comments[0].name;
socialText.textContent = idArray[0].comments[0].message;



/*
for (let i = 0; i < idArray.length; i++){
  // let commentsIdArray = idArray[i].comments;
  for (let j = 0; j < idArray[i].comments.length; j++) {
    console.log('in big pictures' + idArray[i].comments[j].avatar);
    socialPicture.src = idArray[i].comments[j].avatar + '.svg';
    console.log('in big pictures socialPicture.src ' + socialPicture);
  }
}


for (let i = 0; i < idArray.length; i++){
  for (let j = 0; j < idArray[i].comments.length; j++) {
    socialPicture.src = idArray[i].comments[j].avatar + '.svg';
    socialPicture.alt = idArray[i].comments[j].name;
    socialText.textContent = idArray[i].comments[j].message;
    socialComments.appendChild(socialPicture);
    socialComments.appendChild(socialText);
  }
}


/*
pictureModalOpenPicture.addEventListener('click', () => {
  openPictureModal();
  console.log('Первый элемент' + idArray[0]);
  bigPictureImg.src = idArray[0].url;
  likesCount.textContent = idArray[0].likes;
  commentsCount.textContent = idArray[0].comments.length;
  socialCaption.textContent = idArray[0].description;
  socialPicture.src = idArray[0].comments[0].avatar + '.svg';
  socialPicture.alt = idArray[0].comments[0].name;
  socialText.textContent = idArray[0].comments[0].message;
});
*/

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
