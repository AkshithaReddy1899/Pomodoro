const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");
const start = document.getElementById("start");
const pause = document.getElementById("pause");

const reset = document.getElementById("reset");
let displayTime = document.querySelector(".time");

let timeInSeconds;
let timerWork;
let pomodoroTimeInSeconds = "1200";
let shortBreakTimeInSeconds = "300";
let longBreakTimeInSeconds = "600";
let setPomodoroTimeInSeconds;

timeInSeconds = pomodoroTimeInSeconds;

/*SETTINGS**/

const btn = document.getElementById("settings");
let modal = document.getElementById("modal");
const submit = document.getElementById("submit");
let setPomodoro = document.getElementById("setPomodoroTime");


let root = document.querySelector(":root");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");
let color8 = document.getElementById("color8");

/*SOUND*/
let audio = new Audio("clock-tick.mp3");

let defaultTime = {
    defaultPomodoro: 20,
    defaultShort: 5,
    defaultLong: 10
};

displayTime.textContent = `${defaultTime.defaultPomodoro}:00`;
//display time

pomodoro.addEventListener("click", () => {

    audio.pause();

    clearInterval(timerWork);
    start.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "none";

    displayTime.textContent = `${defaultTime.defaultPomodoro}:00`;
});

shortBreak.addEventListener("click", () => {
    shortBreakTimeInSeconds = "300";
    timeInSeconds = shortBreakTimeInSeconds;
    audio.pause();

    clearInterval(timerWork);
    start.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "none";

    if (defaultTime.defaultShort < 10) {
        displayTime.textContent = `0${defaultTime.defaultShort}:00`;
    } else {
        displayTime.textContent = `${defaultTime.defaultShort}:00`;
    }
});

longBreak.addEventListener("click", () => {
    longBreakTimeInSeconds = "600";
    timeInSeconds = longBreakTimeInSeconds;
    clearInterval(timerWork);
    start.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "none";
    audio.pause();

    if (defaultTime.defaultLong < 10) {
        displayTime.textContent = `0${defaultTime.defaultLong}:00`;
    } else {
        displayTime.textContent = `${defaultTime.defaultLong}:00`;
    }
});

function pomodoroTimer() {
    const secondsLeft = timeInSeconds;
    let result = "";
    const seconds = parseInt(secondsLeft % 60);
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time;
    }
    if (hours > 0) {
        result += `${hours}:`;
    }
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;

    secondsLeft < "0" ? clearInterval(timerWork) : displayTime.textContent = result.toString();
}

start.addEventListener("click", () => {
    clearInterval(timerWork);
    pause.style.display = "block";
    reset.style.display = "block";
    start.style.display = "none";
    timerWork = setInterval(() => {
        timeInSeconds--;
        pomodoroTimer();
        audio.play();
        if (timeInSeconds < 0) {
            audio.pause();
        }
    }, 1000);
});

pause.addEventListener("click", () => {
    clearInterval(timerWork);
    start.style.display = "block";
    audio.pause();
});

/*SETTINGS*/

btn.addEventListener("click", displayModal);

function displayModal() {
    audio.pause();
    clearInterval(timerWork);
    pause.style.display = "block";
    reset.style.display = "block";
    start.style.display = "none";
    modal.style.display = "block";
}

const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", function closeModal() {
    modal.style.display = "none";
});

submit.addEventListener("click", () => {
    modal.style.display = "none";
    pause.style.display = "none";
    reset.style.display = "none";
    start.style.display = "block";

    setPomodoroTimeInSeconds = (setPomodoro.value) * 60;
    setPomodoro.value.length === 0 ? timeInSeconds = "1200" : timeInSeconds = setPomodoroTimeInSeconds.toString();

    if (setPomodoro.value < 10 && setPomodoro.value > 0) {
        displayTime.textContent = `0${setPomodoro.value}:00`;
    } else if (setPomodoro.value >= 10 && setPomodoro.value < 100) {
        displayTime.textContent = `${setPomodoro.value}:00`;
    } else if (setPomodoro.value >= 100) {
        displayTime.textContent = `${setPomodoro.value}:00`;
    } else if (setPomodoro.value < 0) {
        alert("Please enter your time in minutes");
    }
});

color1.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#79a6a3");
});
color2.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#9fb9bf");
});
color3.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#698561");
});
color4.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#b5ead7");
});
color5.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#c6adad");
});
color6.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#fcd5ce");
});
color7.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#ffdac1");
});
color8.addEventListener("click", () => {
    root.style.setProperty("--primary-color", "#c1bbdd");
});
