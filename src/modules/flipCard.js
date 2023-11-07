import disableCards from "./disableCards";
import { countMovement } from "./countMovement";
import { scoreGame, setScore } from "./setScore";
import { templateScoreGame } from "./templates";

let card;
let lockBoard = false;
let hasFlipped = false;
let firstCard, secondCard;

export default function flipCard() {
  if (lockBoard) return;
  this.classList.add("flip");

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlipped = false;

  checkMatch(firstCard, secondCard);
}

function checkMatch(firstCard, secondCard) {
  if (firstCard.dataset.identity === secondCard.dataset.identity) {
    disableCards(firstCard, secondCard, flipCard);

    setScore(scoreGame());
    countMovement(true);
    return;
  }

  unflipCards(firstCard, secondCard);
}

function unflipCards(firstCard, secondCard) {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
    countMovement(false);
  }, 900);
}
