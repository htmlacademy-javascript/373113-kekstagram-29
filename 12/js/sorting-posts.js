// Сортировка миниатюр фотографий других пользователей
import { createRandomPosts, showAlert, debounce } from './util.js';
import { data } from './api.js';
import { renderMiniaturePhotos } from './render-miniature-photos.js';

const RERENDER_DELAY = 500;

// Секция с фильтрами
const imageFilters = document.querySelector('.img-filters');
// По умолчанию
const imageFilterDefault = document.querySelector('#filter-default');
// Сортировка по умолчанию(при открытии страницы)
let currentFilter = imageFilterDefault.id;
let discussedData;
let randomData;

// <По умолчанию — фотографии в изначальном порядке с сервера(data)
// <Случайные — 10 случайных, не повторяющихся фотографий>
const createRandomData = () => {
  if (data !== undefined) {
    randomData = createRandomPosts(data);
  }
  return randomData;
};
randomData = createRandomData();

// <Обсуждаемые — сортировка в порядке убывания количества комментариев>
const createDiscussedData = () => {
  if (data !== undefined) {
    const comparePosts = (postA, postB) => postB.comments.length - postA.comments.length;
    discussedData = data.slice().sort(comparePosts);
  }
  return discussedData;
};
discussedData = createDiscussedData();

// Объект с вариантами сортировки постов
const SortOptions = {
  'filter-default': data,
  'filter-random': randomData,
  'filter-discussed': discussedData,
};

const renderPosts = () => {
  const array = SortOptions[currentFilter];
  try {
    renderMiniaturePhotos(array);
  } catch (err) {
    showAlert(err.message);
  }
};

// «устранение дребезга», чтобы при переключении фильтра обновление списка элементов,
// подходящих под фильтры, происходило не чаще, чем один раз в полсекунды.
const renderDebounce = debounce(() => {
  renderPosts();
}, RERENDER_DELAY);

const renderSortedPosts = () => {
  renderPosts(currentFilter);
  if (data !== undefined) {
    imageFilters.classList.remove('img-filters--inactive');
  }
  imageFilters.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    imageFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    renderDebounce(currentFilter);
  });
};

export {renderSortedPosts};
