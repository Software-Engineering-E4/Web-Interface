function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar1 = document.querySelector(".progress-positive");
const myProgressBar2 = document.querySelector(".progress-negative");
const myProgressBar3 = document.querySelector(".progress-neutral");
/*

updateProgressBar(myProgressBar3, neutral);
updateProgressBar(myProgressBar2, negative);
updateProgressBar(myProgressBar1, positive);*/