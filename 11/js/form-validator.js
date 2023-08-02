import {onDocumentKeydown} from './form.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadText = document.querySelector('.img-upload__text');
const formHashtag = imageUploadText.querySelector('.text__hashtags');
const formDescription = imageUploadText.querySelector ('.text__description');

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const normalizeString = (value) => {
  const noNormalizedArray = value.trim().split(' ');
  const normalizedArray = noNormalizedArray.filter((tag) => tag.length > 0);
  return normalizedArray;
};

// Для разных ошибок показываются разные сообщения. Следует разделять случаи, когда:
// 1. введён невалидный хэш-тег;
const isValidateTextHashtag = (textHashtag) => normalizeString(textHashtag).every((tag) => VALID_SYMBOLS.test(tag));

pristine.addValidator(
  formHashtag,
  isValidateTextHashtag,
  'Хэштег должен начинаться с #, состоять из букв и чисел и содержать 20 символов, включая #'
);

// 2. превышено количество хэш-тегов;
const isValidCountHashtag = (textHashtag) => normalizeString(textHashtag).length <= MAX_HASHTAG_COUNT;

pristine.addValidator(
  formHashtag,
  isValidCountHashtag,
  'Максимальное количество хэштегов - 5'
);

// 3. хэш-теги повторяются.
const isUniqueHashtag = (textHashtag) => {
  const lowerCase = normalizeString(textHashtag).map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};

pristine.addValidator(
  formHashtag,
  isUniqueHashtag,
  'Хэштеги должны быть уникальными'
);

const calcelEsc = (item) => {
  item.addEventListener('focus', () => {
    window.removeEventListener('keydown', onDocumentKeydown);
  });
  item.addEventListener('blur', () => {
    window.addEventListener('keydown', onDocumentKeydown);
  });
};
calcelEsc(formHashtag);
calcelEsc(formDescription);

export {imageUploadForm, pristine};
