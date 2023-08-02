// Показывает сообщения после отправки формы
import { isEscapeKey } from './util.js';
import { pristine, imageUploadForm } from './form-validator.js';
import { sendData } from './api.js';
import { closeForm, onDocumentKeydown } from './form.js';

const ButtonClass = {
  ERROR: '.error__button',
  SUCCESS: '.success__button',
};

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const uploadButton = document.querySelector('.img-upload__submit');

const closeMessage = () => {
  const messages = document.querySelector('.error') || document.querySelector('.success');
  messages.remove();
  window.removeEventListener('keydown', onDocumentKeydownEsc);
  document.removeEventListener('click', onBodyClick);
  window.addEventListener('keydown', onDocumentKeydown);
};
const onCloseButtonClick = () => closeMessage();

// Показываем сообщение после отправки формы
const showMessage = (message, buttonMessage) => {
  document.body.append(message);
  message.querySelector(buttonMessage).addEventListener('click', onCloseButtonClick);
  window.addEventListener('keydown', onDocumentKeydownEsc);
  document.addEventListener('click', onBodyClick);
  if (message === errorMessage) {
    window.removeEventListener('keydown', onDocumentKeydown);
  }
};

// Функция закрытия сообщения формы по кнопке ESС
function onDocumentKeydownEsc(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

// Определяем был ли клик за пределами блока с сообщением
function onBodyClick (evt) {
  if (evt.target.closest('.error__inner') || evt.target.closest('.success__inner')) {
    return;
  }
  closeMessage();
}

const showSuccessMessage = () => showMessage(successMessage, ButtonClass.SUCCESS);
const showErrorMessage = () => showMessage(errorMessage, ButtonClass.ERROR);

// Блокировка кнопки отправки формы
const blockUploadButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Отправляю...';
};

// Отмена блокировки кнопки отправки формы
const unblockUploadButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
};

// Отправка данных формы на сервер (+ скрытие формы и показ сообщения об успешной отправке)
const sendDataSuccess = async (data) => {
  try {
    await sendData(data);
    showSuccessMessage();
    closeForm();
  } catch {
    showErrorMessage();
  }
};

// Отправка формы или показ ошибки (проверка валидации, показ соответствующего окна, сбор информации с формы в formData)
imageUploadForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockUploadButton();
    const formData = new FormData(evt.target);
    await sendDataSuccess(formData);
    unblockUploadButton();
  }
});
