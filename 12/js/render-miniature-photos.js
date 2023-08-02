// Создает миниатюры изображений на основе массива, полученного с сервера

const allPostsList = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderMiniaturePhotos = (posts) => {
  const unnecessaryPosts = allPostsList.querySelectorAll('.picture');
  unnecessaryPosts.forEach((element) => element.remove());
  const allPosts = document.createDocumentFragment();
  posts.forEach(({id, url, description, likes, comments}) => {
    const postElement = postTemplate.cloneNode(true);
    postElement.dataset.id = id;
    postElement.querySelector('.picture__img').src = url;
    postElement.querySelector('.picture__img').alt = description;
    postElement.querySelector('.picture__likes').textContent = likes;
    postElement.querySelector('.picture__comments').textContent = comments.length;
    allPosts.append(postElement);
  });
  allPostsList.append(allPosts);
};

export {renderMiniaturePhotos};
