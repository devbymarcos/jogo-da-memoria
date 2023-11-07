import flipCard from "./flipCard";
import { templateGameOver } from "./templates";
import { loadScore } from "./setScore";
function endGame() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.removeEventListener("click", flipCard);
  });

  templateGameOver();
  loadScore();
}

export default endGame;
