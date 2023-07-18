import { idArray } from "./data.js";

var pictureTemplate = document.querySelector('#picture').content;
var pictureItemTemplate = pictureTemplate.querySelector('.picture');
var pictures = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

idArray.forEach(element => {
  var picture = pictureItemTemplate.cloneNode(true);
  var pictureImg = picture.querySelector('.picture__img');
  pictureImg.src = element.url;
  pictureImg.alt = element.description;
  var pictureComments = picture.querySelector('.picture__comments');
  var pictureLikes = picture.querySelector('.picture__likes');
  pictureComments.textContent = element.comments.length;
  pictureLikes.textContent = element.likes;

  fragment.append(picture);
});

pictures.appendChild(fragment);
