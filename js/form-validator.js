const MAX_HASHTAG_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

import {onDocumentKeydown} from './form.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadText = document.querySelector('.img-upload__text');
const formHashtag = imageUploadText.querySelector('.text__hashtags');
const formDescription = imageUploadText.querySelector ('.text__description');

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const normilize = (value) => {
  const noNormilizeArray = value.trim().split(' ');
  const normilizeArray = noNormilizeArray.filter((tag) => tag.length > 0);
  return normilizeArray;
};


const isValidateTextHashtag = (textHashtag) => normilize(textHashtag).every((tag) => VALID_SYMBOLS.test(tag));

pristine.addValidator(
  formHashtag,
  isValidateTextHashtag,
  'Хэштег должен начинаться с #, состоять из букв и чисел и содержать 20 символов, включая #'
);

const isValidCountHashtag = (textHashtag) => normilize(textHashtag).length <= MAX_HASHTAG_COUNT;

pristine.addValidator(
  formHashtag,
  isValidCountHashtag,
  'Максимальное количество хэштегов - 5'
);

const isUniqueHashtag = (textHashtag) => {
  const lowerCase = normilize(textHashtag).map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};

pristine.addValidator(
  formHashtag,
  isUniqueHashtag,
  'Хэштеги должны быть уникальными'
);

const checkDescriptionLength = (textDescription) => textDescription.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  formDescription,
  checkDescriptionLength,
  'Длина должна быть меньше 140 символов'
);

const cancelEsc = (item) => {
  item.addEventListener('focus', () => {
    window.removeEventListener('keydown', onDocumentKeydown);
  });
  item.addEventListener('blur', () => {
    window.addEventListener('keydown', onDocumentKeydown);
  });
};
cancelEsc(formHashtag);
cancelEsc(formDescription);

export {imageUploadForm, pristine};
