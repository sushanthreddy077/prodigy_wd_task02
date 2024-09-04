// JavaScript to control the stopwatch functionality
let timer;
let milliseconds = 0, seconds = 0, minutes = 0;
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', recordLap);

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    lapsList.innerHTML = ''; // Clear laps
}

function recordLap() {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
    lapsList.appendChild(li);
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
