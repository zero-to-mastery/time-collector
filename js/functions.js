const loadRegisterPage = () => window.location.assign("register.html");

const loadBackPage = () => window.history.back();

// Basic timer functionality

let timerVar = null;
let breakVar = null;
let workedSeconds = 0;
let breakSeconds = 0;
let totalSeconds = workedSeconds + breakSeconds;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
const timer = document.getElementById("timer");
const breakTimer = document.getElementById("breakTimer");
const totalTime = document.getElementById("totalTime");
const workingStage = document.getElementById("workingStage");

// Pad a single digit number with one leading zero
const pad = num => (num > 9 ? num : "0" + num);

const startTimer = () => {
  totalSeconds++;
  const setHour = seconds => Math.floor(seconds / 3600),
    setMinute = seconds => Math.floor((seconds / 60) % 60),
    setSeconds = seconds => seconds % 60;

  if ( timerVar ) {
    workedSeconds++;
    timer.innerHTML = `${pad(setHour(workedSeconds))}:${pad(setMinute(workedSeconds))}:${pad(setSeconds(workedSeconds))}`;
  }
  if ( breakVar ) {
    breakSeconds++;
    timer.innerHTML = `${pad(setHour(breakSeconds))}:${pad(setMinute(breakSeconds))}:${pad(setSeconds(breakSeconds))}`;
  }
  
  totalTime.innerHTML = `${pad(setHour(totalSeconds))}:${pad(setMinute(totalSeconds))}:${pad(setSeconds(totalSeconds))}`;
  
};
const timerBreak = () => {
  breakSeconds++;
  let hour = Math.floor(breakSeconds / 3600);
  let minute = Math.floor((breakSeconds / 60) % 60);
  let seconds = breakSeconds % 60;

  breakTimer.innerHTML = `${pad(hour)}:${pad(minute)}:${pad(seconds)}`;
}

startBtn.addEventListener("click", () => {
  if (startBtn.getAttribute('data-toggle') === 'start'){
    stopTimer(breakVar);
    breakVar = null;
    timerVar = setInterval(startTimer, 1000);
    startBtn.innerText = 'Break';
    startBtn.classList.toggle("red-border");
    startBtn.setAttribute('data-toggle', 'break');
    workingStage.innerText = 'WORKING TIME';
  }else {
    stopTimer(timerVar);
    timerVar = null;
    breakVar = setInterval(startTimer, 1000);
    startBtn.innerText = 'Start';
    startBtn.classList.toggle("red-border");
    startBtn.setAttribute('data-toggle', 'start');
    workingStage.innerText = 'YOU ARE ON THE BREAK';
  }
});


stopBtn.addEventListener("click", () => {
  stopTimer(timerVar);
  stopTimer(breakVar);
});

resetBtn.addEventListener("click", () => {
  stopTimer(timerVar);
  stopTimer(breakVar);
  timer.innerHTML = "00:00:00";
  totalTime.innerHTML = "00:00:00";
  totalSeconds = 0;
  breakSeconds = 0;
  workSeconds = 0;
  startBtn.innerText = 'Start';
  workingStage.innerText = "Let's Get Started";

});

const stopTimer = timer => clearInterval(timer);
