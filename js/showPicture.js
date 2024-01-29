function clickHandler(e, data) {
  const body = document.querySelector('.body');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const likes = bigPicture.querySelector('.likes-count');
  const comments = bigPicture.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');
  const commentsContainer = bigPicture.querySelector('.social__comments');
  const selectedPhoto = data.find(photo => photo.id == e.target.dataset.id);

  e.stopPropagation();

  console.log(selectedPhoto);

  body.classList.add('modal-open');
  bigPictureImg.src = e.target.src;
  likes.innerText = selectedPhoto.likes;
  description.innerText = selectedPhoto.description;
  comments.innerText = selectedPhoto.comments.length;

  commentsContainer.innerHTML = '';

  selectedPhoto.comments.forEach(comment => {
    if (comment.message.trim() !== "") {
      const commentElement = document.createElement('li');
      commentElement.className = 'social__comment';

      const randomAvatarNumber = Math.floor(Math.random() * 6) + 1;
      const avatarElement = document.createElement('img');
      avatarElement.className = 'social__picture';
      avatarElement.src = `/img/avatar-${randomAvatarNumber}.svg`;
      avatarElement.alt = comment.name;
      avatarElement.width = 35;
      avatarElement.height = 35;

      const textElement = document.createElement('p');
      textElement.className = 'social__text';
      textElement.innerText = comment.message;

      commentElement.appendChild(avatarElement);
      commentElement.appendChild(textElement);

      commentsContainer.appendChild(commentElement);
    }
  });

  bigPicture.classList.remove('hidden');
}

function closePictureHandler() {
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('.body');

  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
}

export function showPicture(data) {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.getElementById('picture');

  data.forEach(photo => {
    const picture = pictureTemplate.content.cloneNode(true);
    const img = picture.querySelector('.picture__img');

    img.dataset.id = photo.id;
    img.src = photo.url;
    img.alt = 'photo';

    picturesContainer.appendChild(picture);
  });

  const pictureItems = document.querySelectorAll('.picture');
  const closeBtn = document.querySelector('.big-picture__cancel');

  pictureItems.forEach(pictureItem => pictureItem.addEventListener('click', (e) => clickHandler(e, data)));
  closeBtn.addEventListener('click', closePictureHandler);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePictureHandler();
    }
  });
}
