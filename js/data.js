import {getRandomInteger} from './random-number.js';
import {getRandomArrayElement} from './random-array-element.js';
import {createIdGenerator} from './unique-sequential-number.js';
import {currentPhotoComments} from './data-comments.js';

const DESCRIPTIONS = [
  'альбомная',
  'бумажная',
  'вызывающая',
  'выцвевшая',
  'военная',
  'выбранная',
  'великая',
  'великолепная',
  'говорящая',
  'гладкая',
  'глянцевая',
  'городская',
  'глубокая',
  'драгоценная',
  'единственная',
  'заграничная',
  'запрещенная',
  'запасная',
  'знаковая',
  'знакомая',
  'заветная',
  'звездная',
  'загадочная',
  'историческая',
  'искренняя',
  'идеальная',
  'колоритная',
];


const randomIdIndex = createIdGenerator (); // Генерируем случайное число ID

const createArray = () => {
  return {
    id: randomIdIndex(),
    url: 'photos/' + getRandomInteger(1,6) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: currentPhotoComments(),
  };
};
const idArray = [];

for (let i = 0; i < 25; i++){
  idArray.push(createArray());

}
console.log (idArray);
