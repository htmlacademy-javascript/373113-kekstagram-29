// Функция-генератор случайных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};



const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};


// Функция-генератор последовательных чисел
function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export{createIdGenerator};

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


const MESSAGETEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

 // 1. Функция для выбора предложений из списка предложений
 const createArrayMessages = () => {
  // Возвращаем элемент со случайным  номером выше из списка предложений
  return MESSAGETEXT[getRandomInteger(0, MESSAGETEXT.length - 1)];
};

export{createArrayMessages};

// Функция создания сообщений из предложений в комментариях
const createMessages = () => {
  createArrayMessages();
  // Создаем массив для предложений
  const messagesArray = [];
  // Добавляем в массив предложения с помощью функци 1.
  for(let i = 0; i < getRandomInteger(1,2); i++){
    messagesArray.push(createArrayMessages());
  }
  // Проверяем чтобы предложения не были одинаковыми, если одинаковые удаляем второе проедложение
  if(messagesArray[0] === messagesArray[1]) {
    delete messagesArray[1];
  }

  //Объединяем элементы из массива в одно предложение и выводим получившееся предложение

  return messagesArray.join(' ');
};

export{createMessages};

