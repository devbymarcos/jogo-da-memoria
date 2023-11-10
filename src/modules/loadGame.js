import shuffle from "./shuffle";
import loadImages from "./loadImages";
import flipCard from "./flipCard";
import { resetMovement } from "./movement";
import { templateGameOver } from "./templates";
import { loadScore, scoreGame } from "./score";
import $ from "./selector";

let blockBoard = false;

function loadGame() {
  loadImages();
  loadScore();
  const btnStart = $(".btn-start");
  const cards = $(".card", "all");
  const scoreElem = $(".score");
  //Play game
  btnStart.addEventListener("click", () => {
    scoreElem.innerHTML = `Pontuação: 0`;
    cards.forEach((card) => {
      card.removeEventListener("click", flipCard);
    });

    shuffle();
    resetMovement();
    templateGameOver(true);
    scoreGame(true);

    cards.forEach((card) => {
      card.classList.add("flip");
    });

    const timeFlip = setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove("flip");
      });

      clearTimeFlip();
    }, 5000);

    function clearTimeFlip() {
      clearTimeout(timeFlip);
      blockBoard = true;
      if (blockBoard) {
        cards.forEach((card) => {
          card.addEventListener("click", flipCard);
        });
      }
    }
  });
}

export default loadGame;
