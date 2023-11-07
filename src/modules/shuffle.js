function shuffle() {
  const cards = document.querySelectorAll(".card");
  let qtdaItems = cards.length;
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * qtdaItems) + 1;
    card.style.order = ramdomPos;
  });
}

export default shuffle;
