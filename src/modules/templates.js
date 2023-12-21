import $ from "./selector";

/** 
  @param {string} [status=start] - default "start" use "win" and "lose"
  @returns {Element}
*/
export function templateGameOver(status = "start") {
  const messageEndGameElem = $(".message-endgame");
  switch (status) {
    case "win":
      messageEndGameElem.innerHTML = `<p class="template-winer-game">
                                  Parabéns !!, Você atingiu a pontuação máxima
                                  </p>`;
      break;
    case "lose":
      messageEndGameElem.innerHTML = `<p class="template-game-over">
                                        GAME OVER, acabou os movimentos
                                      </p>`;
      break;
    default:
      messageEndGameElem.innerHTML = "";
      break;
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
