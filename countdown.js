const TIME_LIMIT = 120;
var timePassed = 0;
var timeLeft = 0;

function formatTimeLeft(time) {
  //amount of minutes based on time left
  let minutes = Math.floor(time / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  //seconds are defined by amount left after dividing with 60
  let seconds = time % 60;
  //correcting format of time if it is less than 10 seconds
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`;
}
$("#base-timer").text(formatTimeLeft(TIME_LIMIT))


function startTimer() {

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed
    if (timeLeft >= 0) {
      if (timeLeft === 3) {
        var audio = new Audio('sounds/countdown-sound.mp3');
        audio.play();
      }
      $("#base-timer").text(formatTimeLeft(timeLeft))
    } else {
      $("#base-timer").text(formatTimeLeft(TIME_LIMIT))
      clearInterval(timerInterval);
      timePassed = 0;
    }

  }, 1000)
}

//todo => last three seconds the background colour changes
// add user input, so you can change the amount of time set
