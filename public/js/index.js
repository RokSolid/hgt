// aos
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});

// smoth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// counter 
let countDownItem = Array.from(document.querySelectorAll('.count_down'))
var timeInSecs;
var ticker;

function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000);
}

function tick() {
  var secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  }
  else {
    clearInterval(ticker);
    startTimer(86400 * 5, 3600 * 5, 60 * 5);
  }

  var days = Math.floor(secs / 86400);
  secs %= 86400;
  var hours = Math.floor(secs / 3600);
  secs %= 3600;
  var mins = Math.floor(secs / 60);
  secs %= 60;
  var day = ((days < 10) ? "0" : "") + days;
  var hour = ((hours < 10) ? "0" : "") + hours;
  var min = ((mins < 10) ? "0" : "") + mins;
  var sec = ((secs < 10) ? "0" : "") + secs
  countDownItem[0].textContent = day
  countDownItem[1].textContent = hour
  countDownItem[2].textContent = min
  countDownItem[3].textContent = sec
}

startTimer(86400 * 5, 3600 * 5, 60 * 5);

