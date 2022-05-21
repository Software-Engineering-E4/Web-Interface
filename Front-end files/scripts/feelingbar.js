function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar1 = document.querySelector(".progress-positive");
const myProgressBar2 = document.querySelector(".progress-negative");
const myProgressBar3 = document.querySelector(".progress-neutral");

updateProgressBar(myProgressBar3, 72);
updateProgressBar(myProgressBar2, 74);
updateProgressBar(myProgressBar1, 14);