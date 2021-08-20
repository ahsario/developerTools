import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { trigger } from "./trigger.js";
import { calcTime } from "./calcTime.js";
// import { Howl, Howler } from "howler";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerPage = document.getElementById("timerPage");
const deadline = document.getElementById("date");
const timerSpan = document.getElementById("timerSpan");

let timerId;

document.getElementById("start").addEventListener("click", () => {
  timerId = setInterval(() => calcTime(deadline, timerSpan), 1000);
  if (Math.ceil(new Date() - new Date(timerSpan.value))) clearInterval(timerId);
});

document
  .getElementById("stop")
  .addEventListener("click", () => clearInterval(timerId));

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
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    ); // 5
}
