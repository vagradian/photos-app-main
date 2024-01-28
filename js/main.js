import { showPicture } from "./showPicture";
const url = "http://127.0.0.1:3003/photos";

let photoArray;

try {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  photoArray = await response.json();
  showPicture(photoArray);
} catch (error) {
  console.error("Error fetching data:", error);

  alert(`Something went wrong`);
}

export { photoArray };
