import images from "./dataImages";

const repeat = 2;

function loadImages() {
  const board = document.querySelector("#board");
  for (let i = 0; i < repeat; i++) {
    images.forEach((item) => {
      const image = document.createElement("img");
      image.src = item.image;
      image.classList.add("front-face");
      const cover = document.createElement("img");
      cover.src = item.cover;
      cover.classList.add("back-face");
      const card = document.createElement("div");
      card.setAttribute("data-identity", item.name);
      card.classList.add("card");
      card.appendChild(image);
      card.appendChild(cover);
      board.appendChild(card);
    });
  }
}

export default loadImages;
