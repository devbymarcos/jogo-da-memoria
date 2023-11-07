function disableCards(firstCard, secondCard, fn) {
  firstCard.removeEventListener("click", fn);
  secondCard.removeEventListener("click", fn);
}

export default disableCards;
