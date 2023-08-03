const countDownTo = {
  year: 2023,
  month: 09,
  day: 24,
  hour: 15,
  minute: 30,
  description: "Geburtstag",
};

const dateCountDownTo = new Date(
  countDownTo.year,
  countDownTo.month - 1,
  countDownTo.day,
  countDownTo.hour,
  countDownTo.minute
);

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("description").innerHTML = countDownTo.description;
  document.title = "countdown to " + countDownTo.description;
  document.getElementById("targetDate").innerHTML =
    prettify(countDownTo.year) +
    "-" +
    prettify(countDownTo.month) +
    "-" +
    prettify(countDownTo.day) +
    " " +
    prettify(countDownTo.hour) +
    ":" +
    prettify(countDownTo.minute);
});

let x = setInterval(() => {
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = dateCountDownTo - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timeRemaining").innerHTML =
    prettify(days) +
    "d " +
    prettify(hours) +
    ":" +
    prettify(minutes) +
    ":" +
    prettify(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function prettify(num) {
  return num < 10 ? "0" + num : num;
}
