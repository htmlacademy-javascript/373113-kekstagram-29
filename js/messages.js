import {getRandomInteger} from './random-number.js';
import {createArrayMessages} from './senteces.js';

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
