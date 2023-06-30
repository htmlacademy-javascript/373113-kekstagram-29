
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const randomIdIndex = createIdGenerator ();
const randomUrlIndex = createIdGenerator ();
const randomIdComments = createIdGenerator ();

const messagesMassive = [];
const createMassiveMessages = () => {
  const randomMessagesIndex = getRandomInteger(0, MESSAGETEXT.length - 1);
  console.log('randomMessagesIndex = ' + randomMessagesIndex);
  console.log(MESSAGETEXT[randomMessagesIndex]);
  return MESSAGETEXT[randomMessagesIndex];
};


const indexMessagesCount = getRandomInteger(1,2);
for(let i = 0; i < indexMessagesCount; i++){
  console.log('indexMessagesCount' + indexMessagesCount);
  messagesMassive.push(createMassiveMessages());
}
console.log (messagesMassive);

if(messagesMassive[0] === messagesMassive[1]) {
  delete messagesMassive[1];
}

console.log ('messagesMassive after slice' + messagesMassive);

const connectedMessages = messagesMassive.join(' ');
console.log(connectedMessages);

const createMassiveComments = () => {
  const randomAvatarIndex = getRandomInteger(1, 6);
  return {
    id: randomIdComments(),
    avatar: 'img/avatar-' + randomAvatarIndex,

  };
};


const createMassive = () => {
  const randomDescriptionsIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLikesAmount = getRandomInteger(15, 200);
  const randomCommentAmount = getRandomInteger(0, 30);
  return {
    id: randomIdIndex(),
    url: 'photos/' + randomUrlIndex() + '.jpg',
    description: DESCRIPTIONS[randomDescriptionsIndex],
    likes: randomLikesAmount,
    comments: randomCommentAmount,
  };
};
const idMassive = [];

for (let i = 0; i < 2; i++){

  idMassive.push(createMassive());
  console.log('Проеряю выведет ли '+ idMassive[i].id);
}
console.log (idMassive);


