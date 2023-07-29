import {isEscapeKey} from './util.js';
import {pristine} from './form-validator.js';
import {changeOriginalEffect, onEffectListChange} from './form-slider.js';

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DEFAULT_SCALE = 100;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];


const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');


const effectstList = document.querySelector('.effects__list');

const imgUploadPreview = document.querySelector('.img-upload__preview');
const preview = imgUploadPreview.querySelector('img');
const smallPreviews = document.querySelectorAll('.effects__preview');

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');


const scaleImage = (value) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

// Уменьшение изображения
const onMinButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN){
    scaleImage(SCALE_MIN);
  } else {
    scaleImage(newValue);
  }
};

// Увеличение изображения
const onMaxButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX){
    scaleImage(SCALE_MAX);
  } else {
    scaleImage(newValue);
  }
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imgUploadCancel.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  scaleSmaller.addEventListener('click', onMinButtonClick);
  scaleBigger.addEventListener('click', onMaxButtonClick);
  changeOriginalEffect();
  effectstList.addEventListener('change', onEffectListChange);
};

imgUploadInput.addEventListener('change', () => {
  openForm();
});

const resetScale = () => scaleImage(DEFAULT_SCALE);
const closeForm = () => {
  imageUploadForm.reset();
  pristine.reset();
  resetScale();
  imgUploadPreview.style.transform = '';
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadCancel.removeEventListener('click', onCloseButtonClick);
  window.removeEventListener('keydown', onDocumentKeydown);
  scaleSmaller.removeEventListener('click', onMinButtonClick);
  scaleBigger.removeEventListener('click', onMaxButtonClick);
  effectstList.removeEventListener('change', onEffectListChange);
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

imgUploadInput.addEventListener('change', () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (matches) {
    preview.src = URL.createObjectURL(file);
    smallPreviews.forEach((smallPreview) => {
      smallPreview.style.backgroundImage = `  url('${preview.src}')`;
    });
  }
});

export {onDocumentKeydown, closeForm};

