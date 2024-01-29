import { showPicture } from "./showPicture.js";

const url = "http://127.0.0.1:3003/photos";
console.log("Fetching data from:", url);

let photoArray;

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    photoArray = data;
    showPicture(photoArray);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Something went wrong");
  }
}

fetchData();

export { photoArray };
