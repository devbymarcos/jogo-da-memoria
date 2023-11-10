import $ from "./selector";

export function templateGameOver(clear = false) {
  const messageEndGameElem = $(".message-endgame");
  if (!clear) {
    const html = `<p class="template-game-over"> GAME OVER, acabou os movimentos</p>`;
    messageEndGameElem.innerHTML = html;
  } else {
    const html = ``;
    messageEndGameElem.innerHTML = html;
  }
}

export function templateBestScore(value) {
  const bestScoreElem = $(".best-score");
  bestScoreElem.innerHTML = `Melhor Pontuação : ${value}`;
}

export function templateScoreGame(value) {
  const scoreElem = $(".score");
  scoreElem.innerHTML = `Pontuação: ${value}`;
}

export function templateWinerGame(clear = false) {
  const messageEndGameElem = $(".message-endgame");
  if (!clear) {
    const html = `<p class="template-winer-game">Parabéns !!, Você atingiu a pontuação máxima</p>`;
    messageEndGameElem.innerHTML = html;
  } else {
    const html = ``;
    messageEndGameElem.innerHTML = html;
  }
}
