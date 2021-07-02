const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");
const start = document.getElementById("start");
const pause = document.getElementById("pause");

const reset = document.getElementById("reset");
let displayTime = document.querySelector(".time");

let timeInSeconds = "1200";
let timerWork;
let pomodoroTimeInSeconds;
let shortBreakTimeInSeconds;
let longBreakTimeInSeconds;

/*SOUND*/
let audio = new Audio('clock-tick.mp3');


let defaultTime = {
    defaultPomodoro: 20,
    defaultShort: 5,
    defaultLong: 10,
};

displayTime.textContent = `${defaultTime.defaultPomodoro}:00`;
//display time
pomodoro.addEventListener("click", () => {
    pomodoroTimeInSeconds = "1200";
    timeInSeconds = pomodoroTimeInSeconds;
    clearInterval(timerWork);
    start.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "none";
    audio.pause();

    displayTime.textContent = `${defaultTime.defaultPomodoro}:00`;
});

shortBreak.addEventListener("click", () => {
    shortBreakTimeInSeconds = "300"
    timeInSeconds = shortBreakTimeInSeconds;

    clearInterval(timerWork);
    start.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "none";
    audio.pause();

    if (defaultTime.defaultShort < 10) {
        displayTime.textContent = `0${defaultTime.defaultShort}:00`;
    } else {
        displayTime.textContent = `${defaultTime.defaultShort}:00`;
    }
});

longBreak.addEventListener("click", () => {
    longBreakTimeInSeconds = "600"
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
    let result = '';
    const seconds = timeInSeconds % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time;
    }
    if (hours > 0) result += `${hours}:`;
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
    }, 1000);
});

pause.addEventListener("click", () => {
    clearInterval(timerWork);
    start.style.display = "block";
    audio.pause();
});


/*SETTINGS**/

const btn = document.getElementById("settings");
let modal = document.getElementById("modal");
const submit = document.getElementById("submit");
let setPomodoro = document.getElementById("setPomodoroTime");
let setShortBreak = document.getElementById("setShortBreakTime");
let setLongBreak = document.getElementById("setLongBreakTime");
let root = document.querySelector(':root');
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");
let color8 = document.getElementById("color8");

btn.addEventListener('click', displayModal);

function displayModal() {
    audio.pause();
    clearInterval(timerWork);
    pause.style.display = "block";
    reset.style.display = "block";
    start.style.display = "none";
    modal.style.display = "block";
}

const closeBtn = document.getElementById("close");

closeBtn.addEventListener('click', function closeModal() {
    modal.style.display = "none";
});

submit.addEventListener('click', () => {
    modal.style.display = "none";
    pause.style.display = "none";
    reset.style.display = "none";
    start.style.display = "block";

    timeInSeconds = pomodoroTimeInSeconds;
    pomodoroTimeInSeconds = (setPomodoro.value) * 60;

    timeInSeconds = shortBreakTimeInSeconds;
    shortBreakTimeInSeconds = (setShortBreak.value) * 60;

    timeInSeconds = longBreakTimeInSeconds;
    longBreakTimeInSeconds = (setLongBreak.value) * 60;

    if (setPomodoro.value < 10 && setPomodoro.value > 0) {
        displayTime.textContent = `0${setPomodoro.value}:00`;
    } else if (setPomodoro.value >= 10 && setPomodoro.value < 100) {
        displayTime.textContent = `${setPomodoro.value}:00`;
    } else if (setPomodoro.value >= 100) {
        displayTime.textContent = `${setPomodoro.value}:00`;
    };

    if (setShortBreak.value < 10 && setShortBreak.value > 0) {
        displayTime.textContent = `0${setShortBreak.value}:00`;
    } else if (setShortBreak.value >= 10 && setShortBreak.value < 100) {
        displayTime.textContent = `${setShortBreak.value}:00`;
    } else if (setShortBreak.value >= 100) {
        displayTime.textContent = `${setShortBreak.value}:00`;
    };

    if (setLongBreak.value < 10 && setLongBreak.value > 0) {
        displayTime.textContent = `0${setLongBreak.value}:00`;
    } else if (setLongBreak.value >= 10 && setLongBreak.value < 100) {
        displayTime.textContent = `${setLongBreak.value}:00`;
    } else if (setLongBreak.value >= 100) {
        displayTime.textContent = `${setLongBreak.value}:00`;
    };
});


color1.addEventListener("click", () => {
    root.style.setProperty('--primary-color', '#ccd4ff');
});
color2.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#f4bfff');
});
color3.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#b5ffc6');
});
color4.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#fceec2');
});
color5.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#ffbfad');
});
color6.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#ffaab8');
});
color7.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#ffadad');
});
color8.addEventListener('click', () => {
    root.style.setProperty('--primary-color', '#a788a7');
});