import $ from "./selector";
import flipCard from "./flipCard";
import { templateGameOver, templateWinerGame } from "./templates";
import { loadScore } from "./score";

function endGame(winer = false) {
  const cards = $(".card", "all");
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
