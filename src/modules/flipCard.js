import disableCards from "./disableCards";
import { countMovement } from "./movement";
import { scoreGame, updateBestScore } from "./score";
import endGame from "./endGame";

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

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.identity === secondCard.dataset.identity) {
    disableCards(firstCard, secondCard, flipCard);
    updateBestScore(scoreGame());
    countMovement(true);
    isFlipped();
    return;
  }

  unflipCards();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
    countMovement(false);
    isFlipped();
  }, 900);
}

function isFlipped() {
  const cards = document.querySelectorAll(".card");
  let control = 0;

  cards.forEach((card) => {
    if (card.classList.contains("flip")) {
      control++;
    }
  });

  if (control === cards.length) {
    endGame(true);
  }
}
