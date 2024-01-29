import { showPicture } from "./showPicture.js";
const url = "http://127.0.0.1:3003/photos";
console.log("Fetching data from:", url);

let photoArray;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    photoArray = data;
    showPicture(photoArray);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    alert("Something went wrong");
  });

export { photoArray };
