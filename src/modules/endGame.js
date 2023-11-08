import flipCard from "./flipCard";
import { templateGameOver, templateWinerGame } from "./templates";
import { loadScore } from "./setScore";

function endGame(winer = false) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.removeEventListener("click", flipCard);
  });

  if (!winer) {
    templateGameOver();
  } else {
    templateWinerGame();
  }
  loadScore();
}

export default endGame;
