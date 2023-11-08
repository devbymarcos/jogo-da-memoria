export function templateGameOver(clear = false) {
  const messageEndGameElem = document.querySelector(".message-endgame");
  if (!clear) {
    const html = `<p class="template-game-over"> GAME OVER, acabou os movimentos</p>`;
    messageEndGameElem.innerHTML = html;
  } else {
    const html = ``;
    messageEndGameElem.innerHTML = html;
  }
}

export function templateBestScore(value) {
  const bestScoreElem = document.querySelector(".best-score");
  bestScoreElem.innerHTML = `Best Score : ${value}`;
}

export function templateScoreGame(value) {
  const scoreElem = document.querySelector(".score");
  scoreElem.innerHTML = `Pontuação: ${value}`;
}

export function templateWinerGame(clear = false) {
  const messageEndGameElem = document.querySelector(".message-endgame");
  if (!clear) {
    const html = `<p class="template-winer-game">Parabéns !!, Você atingiu a pontuação máxima</p>`;
    messageEndGameElem.innerHTML = html;
  } else {
    const html = ``;
    messageEndGameElem.innerHTML = html;
  }
}
