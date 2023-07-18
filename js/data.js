import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {createIdGenerator} from './util.js';
import {currentPhotoComments} from './util.js';

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

export{idArray};


