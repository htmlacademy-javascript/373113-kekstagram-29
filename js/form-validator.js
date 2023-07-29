const MAX_HASHTAG_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Хэштег должен начинаться с #, состоять из букв и чисел и содержать 20 символов, включая #',
};

import {onDocumentKeydown} from './form.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadText = document.querySelector('.img-upload__text');
const textHashtags = imageUploadText.querySelector('.text__hashtags');
const textDescription = imageUploadText.querySelector ('.text__description');

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const normalize = (value) => {
  const noNormalizeArray = value.trim().split(' ');
  return noNormalizeArray.filter((tag) => tag.length > 0);
};


const isValidateTextHashtag = (textHashtag) => normalize(textHashtag).every((tag) => VALID_SYMBOLS.test(tag));

pristine.addValidator(
  textHashtags,
  isValidateTextHashtag,
  ErrorText.INVALID_PATTERN,
);

const isValidCountHashtag = (textHashtag) => normalize(textHashtag).length <= MAX_HASHTAG_COUNT;

pristine.addValidator(
  textHashtags,
  isValidCountHashtag,
  ErrorText.INVALID_COUNT,
);

const isUniqueHashtag = (textHashtag) => {
  const lowerCase = normalize(textHashtag).map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};

pristine.addValidator(
  textHashtags,
  isUniqueHashtag,
  ErrorText.NOT_UNIQUE,
);

const checkDescriptionLength = (checkTextDescription) => checkTextDescription.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  textDescription,
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
cancelEsc(textHashtags);
cancelEsc(textDescription);

export {imageUploadForm, pristine};
