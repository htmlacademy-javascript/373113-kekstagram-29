
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

const MESSAGETEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Функция-генератор случайных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция-генератор последовательных чисел
function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const randomIdIndex = createIdGenerator (); // Генерируем случайное число ID
const randomUrlIndex = createIdGenerator (); // Генерируем случайное число URL
const randomIdComments = createIdGenerator (); // Генерируем случайное количество комментариев

// Функция создания сообщений из предложений в комментариях
const createMessages = () => {

  // 1. Функция для выбора предложений из списка предложений
  const createMassiveMessages = () => {
    // Выбираем случайный номер предложения из списка предложений
    const randomMessagesIndex = getRandomInteger(0, MESSAGETEXT.length - 1);
    // Возвращаем элемент со случайным  номером выше из списка предложений
    return MESSAGETEXT[randomMessagesIndex];
  };

  // Выводим количество предложений 1 или 2
  const indexMessagesCount = getRandomInteger(1,2);
  // Создаем массив для предложений
  const messagesMassive = [];
  // Добавляем в массив предложения с помощью функци 1.
  for(let i = 0; i < indexMessagesCount; i++){
    messagesMassive.push(createMassiveMessages());
  }
  // Проверяем чтобы предложения не были одинаковыми, если одинаковые удаляем второе проедложение
  if(messagesMassive[0] === messagesMassive[1]) {
    delete messagesMassive[1];
  }

  //Объединяем элементы из массива в одно предложение
  const connectedMessages = messagesMassive.join(' ');
  //Выводим получившееся предложение

  return connectedMessages;
};
//Функция для создания комментариев
const createMassiveComments = () => {
//Берем случайным номер аватарки
  const randomAvatarIndex = getRandomInteger(1, 6);

  //Возвращаем объект - комментарий
  return {
    id: randomIdComments(),
    avatar: 'img/avatar-' + randomAvatarIndex,
    message: createMessages(),
  };
};
const currentPhotoComments = () => {
  const commentsMassive = [];
  const randomCommentAmount = getRandomInteger(0, 30);

  for(let i = 0; i < randomCommentAmount; i++) {
    createMassiveComments();
    commentsMassive.push(createMassiveComments());
  }
  return commentsMassive;
};

const createMassive = () => {
  const randomDescriptionsIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLikesAmount = getRandomInteger(15, 200);
  return {
    id: randomIdIndex(),
    url: 'photos/' + randomUrlIndex() + '.jpg',
    description: DESCRIPTIONS[randomDescriptionsIndex],
    likes: randomLikesAmount,
    comments: currentPhotoComments(),
  };
};
const idMassive = [];

for (let i = 0; i < 25; i++){
  idMassive.push(createMassive());

}
console.log (idMassive);
