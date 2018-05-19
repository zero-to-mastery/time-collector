function loadRegisterPage() {
	window.location.assign("register.html");
}

function loadBackPage() {
	window.history.back();
}

// Basic timer functionality

var timerVar = null;
var totalSeconds = 0;

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const stopBtn = document.getElementById('stopBtn');
const timer = document.getElementById("timer");

function pad(num) {
	// Pad a single digit number with one leading zero
  return num > 9 ? num : "0" + num;
}

function startTimer() {
	totalSeconds++;
	var hour = Math.floor(totalSeconds / 3600); 
	var minute = Math.floor((totalSeconds / 60) % 60);
	var seconds = totalSeconds % 60;

	timer.innerHTML = `${pad(hour)}:${pad(minute)}:${pad(seconds)}`;
}

startBtn.addEventListener("click", function () {
	if (timerVar === null) {
		// Start a new timer if it doesn't exist yet
		timerVar = setInterval(startTimer, 1000);
	}
})

stopBtn.addEventListener("click", function() {
	stopTimer(timerVar);
})

resetBtn.addEventListener("click", function() {
	stopTimer(timerVar);
	timer.innerHTML = "00:00:00";
	totalSeconds = 0;
	timerVar = setInterval(startTimer, 1000);
})

function stopTimer(timer) {
	clearInterval(timer);
}