import shuffle from "./shuffle";
import loadImages from "./loadImages";
import flipCard from "./flipCard";
import { resetMovement } from "./movement";
import { templateGameOver, templateScoreGame } from "./templates";
import { loadScore, scoreGame } from "./score";
import $ from "./selector";

let timeFlip;

function loadGame() {
  loadImages();
  loadScore();
  const btnStart = $(".btn-start");
  const cards = $(".card", "all");
  const scoreElem = $(".score");
  //Play game
  btnStart.addEventListener("click", () => {
    templateScoreGame(0);

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
    if (timeFlip) {
      clearTimeout(timeFlip);
    }

    timeFlip = setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
      });
    }, 5000);
  });
}

export default loadGame;
