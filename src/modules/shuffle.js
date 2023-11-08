function shuffle() {
  const cards = document.querySelectorAll(".card");
  let cardsLength = cards.length;
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * cardsLength) + 1;
    card.style.order = ramdomPos;
  });
}

export default shuffle;
