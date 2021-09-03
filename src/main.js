import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { trigger } from "./trigger.js";
import { calcTime } from "./calcTime.js";
import image1 from "./images/image1.png";
import "../style.css";
import { Howl, Howler } from "howler";
import muse from "./sound/sound.mp3";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerPage = document.getElementById("timerPage");
const deadline = document.getElementById("date");
const timerSpan = document.getElementById("timerSpan");

let timerId;

document.getElementById("start").addEventListener("click", () => {
  timerId = setInterval(() => {
    calcTime(deadline, timerSpan);
    console.log(new Date(timerSpan.value));
    if (Math.ceil(new Date(deadline.value) - new Date()) <= 0) {
      sound.play("blast");
      clearInterval(timerId);
    }
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timerId);
});

document
  .getElementById("el1")
  .addEventListener("click", () => trigger("el1", dateCalcForm, timerPage));

document
  .getElementById("el2")
  .addEventListener("click", () => trigger("el2", dateCalcForm, timerPage));

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}

var sound = new Howl({
  src: [muse],
  volume: 0.3,
  sprite: {
    blast: [0, 2000],
    laser: [3000, 700],
    winner: [5000, 9000],
  },
});
