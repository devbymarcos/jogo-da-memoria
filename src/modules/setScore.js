import { templateBestScore, templateScoreGame } from "./templates";

let score = 0;

export function setScore(score) {
  const bestScore = localStorage.getItem("best-score");
  if (parseInt(bestScore) < score) {
    localStorage.setItem("best-score", score);
  }
}

export function loadScore() {
  let bestScore = localStorage.getItem("best-score");
  if (!bestScore) {
    bestScore = 0;
    localStorage.setItem("best-score", bestScore);
  }
  templateBestScore(bestScore);
}

export function scoreGame(reload = false) {
  if (reload) {
    score = 0;
    return;
  }
  score++;
  templateScoreGame(score);
  return score;
}
