function updateTimer() {
  const now = new Date();
  const targetTime = new Date();

  targetTime.setHours(13, 0, 0, 0);

  if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
  }

  const difference = targetTime - now;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  document.getElementById("timerHour").innerText = `${hours} h`;
  document.getElementById("timerMinute").innerText = `${minutes} m`;
  document.getElementById("timerSecond").innerText = `${seconds} s`;


  if (difference < 0) {
      clearInterval(timerInterval);
      // Do something
  }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();
