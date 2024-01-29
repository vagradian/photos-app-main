import { photoArray } from './main.js';

export function showPicture() {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.getElementById('picture');

  photoArray.forEach(photo => {
    const picture = pictureTemplate.content.cloneNode(true);

    const img = picture.querySelector('.picture__img');
    const commentsSpan = picture.querySelector('.picture__comments');
    const likesSpan = picture.querySelector('.picture__likes');

    img.src = photo.url;
    img.alt = 'photo';
    commentsSpan.textContent = photo.comments.length;
    likesSpan.textContent = photo.likes;

    picturesContainer.appendChild(picture);
  });
}
