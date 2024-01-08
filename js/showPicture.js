import { photoArray } from './main.js';

const picturesContainer = document.querySelector('.pictures');

let newPhotos = photoArray.map(photo => {
  return `<a href="#" class="picture">
      <img class="picture__img" src="${photo.url}" width="182" height="182" alt="Випадкова фотографія">
      <p class="picture__info">
        <span class="picture__comments">${photo.comments.length}</span>
        <span class="picture__likes">${photo.likes}</span>
      </p>
    </a>`;
}).join('');

picturesContainer.innerHTML = newPhotos;

