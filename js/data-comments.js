import {getRandomInteger} from './random-number.js';
import {getRandomArrayElement} from './random-array-element.js';
import {createIdGenerator} from './unique-sequential-number.js';
import { createMessages } from './messages.js';

const NAMES = [
  'Миша',
  'Саша',
  'Валя',
  'Даша',
  'Паша',
  'Маша',
  'Нюша',
  'Хрюша',
];

const randomIdCommentsIndex = createIdGenerator (); // Генерируем случайное число ID
//Функция для создания комментариев
const createArrayComments = () => {
  //Возвращаем объект - комментарий
  return {
    id: randomIdCommentsIndex(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6),
    message: createMessages(),
    name: getRandomArrayElement(NAMES),
  };
};
const currentPhotoComments = () => {
  const commentsArray = [];
  for(let i = 0; i < getRandomInteger(0, 30); i++) {
    createArrayComments();
    commentsArray.push(createArrayComments());
  }
  return commentsArray;
};

export{currentPhotoComments};
