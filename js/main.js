function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomAvatar() {
  const avatarNumber = getRandomNumber(1, 6);
  return `img/avatar-${avatarNumber}.svg`;
}

function generateRandomAuthor(addedComments) {
  const authorNames = ['Ігор', 'Ольга', 'Петро', 'Анастасія', 'Володимир', 'Марія', 'Сергій', 'Тетяна', 'Юрій', 'Наталія'];
  let randomAuthor;

  do {
    randomAuthor = getRandomElement(authorNames);
  } while (addedComments.some(comment => comment.name === randomAuthor));

  return randomAuthor;
}

function generateRandomComment(addedComments) {
  const commentsOptions = [
    'Все відмінно!',
    'Загалом все непогано. Але не всі.',
    'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
    'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
    'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
    'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
  ];

  let randomMessage;

  do {
    randomMessage = getRandomElement(commentsOptions);
  } while (addedComments.some(comment => comment.message === randomMessage));

  const randomAuthor = generateRandomAuthor(addedComments);

  addedComments.push({ message: randomMessage, name: randomAuthor });

  return {
    id: getRandomNumber(1, 25),
    avatar: generateRandomAvatar(),
    message: randomMessage,
    name: randomAuthor,
  };
}

function generateRandomDescription() {
  const descriptions = [
    'Чудовий пейзаж!',
    'Захоплююча моментальна фотографія.',
    'Поринув у світ кольорів.',
    'Природа в своїй красі.',
    'Атмосфера і відчуття в кожній деталі.',
    'Момент, який ніколи не забуду.',
  ];

  return getRandomElement(descriptions);
}

function generateComments() {
  const numComments = getRandomNumber(0, 5);
  const comments = [];

  for (let j = 0; j < numComments; j++) {
    generateRandomComment(comments);
  }

  return comments;
}

function generatePhotoObjects() {
  const photoArray = [];

  for (let i = 1; i <= 25; i++) {
    const comments = generateComments();
    photoArray.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: generateRandomDescription(),
      likes: getRandomNumber(15, 200),
      comments: comments,
    });
  }

  return photoArray;
}

export const photoArray = generatePhotoObjects();
// console.log(photoArray);
