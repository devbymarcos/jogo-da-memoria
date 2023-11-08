import endGame from "./endGame";
let movement = 20;

const movementElement = document.querySelector(".guesses");

export function countMovement(plus) {
  if (plus) {
    movement++;
  } else {
    movement--;
  }
  movementElement.innerHTML = `Movimentos: ${movement}`;
  // TODO Finalizar o jogo
  if (movement <= 0) {
    endGame();
  }
}

export function resetMovement() {
  movement = 20;
  movementElement.innerHTML = `Movimentos: ${movement}`;
}
