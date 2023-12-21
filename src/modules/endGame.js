import $ from "./selector";
import flipCard from "./flipCard";
import { templateGameOver } from "./templates";
import { loadScore } from "./score";

function endGame(winer = false) {
  const cards = $(".card", "all");
  cards.forEach((card) => {
    card.removeEventListener("click", flipCard);
  });

  if (!winer) {
    templateGameOver("lose");
  } else {
    templateGameOver("win");
  }
  loadScore();
}

export default endGame;
