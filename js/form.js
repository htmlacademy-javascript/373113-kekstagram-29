const FILE_TYPES = ['jpg', 'jpeg', 'png'];

import {isEscapeKey} from './util.js';
// Форма
const imageUploadForm = document.querySelector('.img-upload__form');
// Поле для загрузки фотографий
const imageUploadInput = document.querySelector('.img-upload__input');
// Форма редактирования изображения
const formEditor = document.querySelector('.img-upload__overlay');
// Кнопка закрытия формы
const uploadCancelButton = document.querySelector('.img-upload__cancel');

// Загрузка изображения пользователя
const fileChooser = document.querySelector('.img-upload__input');
const scaleImage = document.querySelector('.img-upload__preview');
const preview = scaleImage.querySelector('img');


const openForm = () => {
  formEditor.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadCancelButton.addEventListener('click', onCloseButtonClick);
  window.addEventListener('keydown', onDocumentKeydown);
};

imageUploadInput.addEventListener('change', () => {
  openForm();
});


const closeForm = () => {
  formEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadCancelButton.removeEventListener('click', onCloseButtonClick);
  window.removeEventListener('keydown', onDocumentKeydown);
};

function onCloseButtonClick () {
  closeForm ();
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

// Загрузка изображения пользователя
fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});

export {onDocumentKeydown, closeForm};

