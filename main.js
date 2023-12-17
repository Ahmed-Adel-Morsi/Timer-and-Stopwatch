// Timer Page
let timerPage = document.getElementById("timer_page");
let start = document.getElementById("start");
let counterNumbers = document.getElementById("inputs");
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let addBtn = document.getElementById("add");
let addedCounters = document.getElementById("added");
let alertContainer = document.getElementById("alert");
let alertMsg = document.getElementById("alertmsg");
let timerCounterNumbers = { hours: 0, minutes: 0, seconds: 0 };
let timerInterval, NumberOfSeconds, secondsNow;

// Timer Sec Page
let timerSecPage = document.getElementById("timer_sec_page");
let timerCounter = document.getElementById("timer_counter");
let counterCircle = document.getElementById("counterCircle");
let pauseAndCancelBtn = document.getElementById("pausecancelbtn");
let cancelBtn = document.getElementById("cancel");
let pauseBtn = document.getElementById("pause");
let completedAudio = document.getElementById("audio");
let successSymbol = document.getElementById("success");

// Stopwatch Page
let swPage = document.getElementById("sw_page");
let stopwatchCounter = document.getElementById("stopwatch_counter");
let lapSwBtn = document.getElementById("lap_sw_btn");
let startSwBtn = document.getElementById("start_sw_btn");
let swCounterNumbers = { hours: 0, minutes: 0, seconds: 0 };
let swInterval;

// page
let timerBtn = document.getElementById("timerbtn");
let stopwatchBtn = document.getElementById("stopwatchbtn");

// General Methods
function restCounter(count) {
  count.hours = 0;
  count.minutes = 0;
  count.seconds = 0;
}

function addzero(number) {
  return parseInt(number) < 10 ? "0" + parseInt(number).toString() : number;
}

function formatTime(count) {
  if (secondsNow < 60) return count.seconds;
  else if (secondsNow < 3600) {
    if (secondsNow < 600) return count.minutes + ":" + addzero(count.seconds);
    else return addzero(count.minutes) + ":" + addzero(count.seconds);
  } else if (secondsNow < 36000) {
    return (
      count.hours + ":" + addzero(count.minutes) + ":" + addzero(count.seconds)
    );
  } else {
    return (
      addzero(count.hours) +
      ":" +
      addzero(count.minutes) +
      ":" +
      addzero(count.seconds)
    );
  }
}

function formatSwTime(count) {
  return (
    addzero(count.hours) +
    ":" +
    addzero(count.minutes) +
    ":" +
    addzero(count.seconds)
  );
}

// Storage
let savedCounters;
if (localStorage.counters != null) {
  savedCounters = JSON.parse(localStorage.counters);
} else {
  savedCounters = [];
}

window.onload = function () {
  updateCounters();
  NumberOfSeconds = overallSeconds();
  secondsNow = NumberOfSeconds;
};

// Timer First Page
function updateCounters() {
  addedCounters.innerHTML = "";
  for (let i = savedCounters.length - 1; i >= 0; i--) {
    addedCounters.innerHTML += `<div id="counterCircle" class="small-circle" onclick="setTimerValue(this)">
  <p id="smlcounter" class="counter">${addzero(
    savedCounters[i].hours
  )}:${addzero(savedCounters[i].minutes)}:${addzero(
      savedCounters[i].seconds
    )}</p>
  <button class="x-btn" onclick="removeSmallCounter(${i}); event.stopPropagation();">x</button>
  </div>`;
  }
}

function addNewCounter() {
  let newCounter = {
    hours: timerCounterNumbers.hours,
    minutes: timerCounterNumbers.minutes,
    seconds: timerCounterNumbers.seconds,
  };

  let index = savedCounters.findIndex(
    (obj) =>
      obj.hours === newCounter.hours &&
      obj.minutes === newCounter.minutes &&
      obj.seconds === newCounter.seconds
  );

  if (index !== -1) {
    showAlert("Already Exist!");
  } else {
    savedCounters.push(newCounter);
    localStorage.setItem("counters", JSON.stringify(savedCounters));
    updateCounters();
  }
}

function removeSmallCounter(index) {
  savedCounters.splice(index, 1);
  localStorage.counters = JSON.stringify(savedCounters);
  updateCounters();
}

timerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  timerBtn.style = "opacity: 1;text-decoration: underline;";
  stopwatchBtn.style = "opacity: 0.8;text-decoration: none;";
  if (secondsNow === 0) {
    renderTimerPage();
    counterCircle.style.background = "var(--white-color)";
    successSymbol.classList.add("hide");
    timerCounter.classList.remove("hide");
  } else renderTimerSecPage();
});

start.onclick = function () {
  clearInterval(timerInterval);
  getCounterValues();
  if (inputCheck()) {
    NumberOfSeconds = overallSeconds();
    secondsNow = NumberOfSeconds;
    timerCounter.innerHTML = formatTime(timerCounterNumbers);
    renderTimerSecPage();
    startTimer();
  }
};

function startTimer() {
  timerInterval = setInterval(function () {
    if (
      timerCounterNumbers.seconds == 0 &&
      timerCounterNumbers.minutes == 0 &&
      timerCounterNumbers.hours == 0
    ) {
      clearInterval(timerInterval);
      return;
    } else if (
      timerCounterNumbers.seconds == 0 &&
      timerCounterNumbers.minutes > 0
    ) {
      timerCounterNumbers.minutes--;
      timerCounterNumbers.seconds = 60;
    } else if (
      timerCounterNumbers.seconds == 0 &&
      timerCounterNumbers.minutes == 0 &&
      timerCounterNumbers.hours > 0
    ) {
      timerCounterNumbers.hours--;
      timerCounterNumbers.minutes = 59;
      timerCounterNumbers.seconds = 60;
    }
    if (timerCounterNumbers.seconds > 0) {
      timerCounterNumbers.seconds--;
    }
    secondsNow--;
    timerCounter.innerHTML = formatTime(timerCounterNumbers);
    counterCircle.style.background = `conic-gradient(var(--orange-color) ${percentage(
      secondsNow
    )}%, var(--white-color) 0)`;
    if (secondsNow == 0) {
      completedAudio.play();
      counterCircle.style.background = "#4caf50";
      successSymbol.classList.remove("hide");
      timerCounter.classList.add("hide");
    }
  }, 1000);
}

cancelBtn.addEventListener("click", function (event) {
  event.preventDefault();
  renderTimerPage();
  clearInterval(timerInterval);
  counterCircle.style.background = "var(--white-color)";
  successSymbol.classList.add("hide");
  timerCounter.classList.remove("hide");
});

pauseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (pauseBtn.innerHTML == "Pause") {
    clearInterval(timerInterval);
    pauseBtn.classList.add("resume-btn");
    pauseBtn.classList.remove("pause-btn");
    pauseBtn.innerHTML = "Resume";
  } else {
    startTimer();
    pauseBtn.classList.add("pause-btn");
    pauseBtn.classList.remove("resume-btn");
    pauseBtn.innerHTML = "Pause";
  }
});

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  getCounterValues();
  if (overallSeconds() == 0) showAlert("Add any Timer value Over 0");
  else addNewCounter();
});

function showAlert(msg) {
  alertContainer.classList.remove("hide");
  alertMsg.innerHTML = msg;
}

document.addEventListener("keydown", function (event) {
  alertContainer.classList.add("hide");
  hoursInput.style.color = "var(--white-color)";
  minutesInput.style.color = "var(--white-color)";
  secondsInput.style.color = "var(--white-color)";
});

function select(input) {
  input.select();
}

function getCounterValues() {
  timerCounterNumbers = {
    hours: parseInt(hoursInput.value),
    minutes: parseInt(minutesInput.value),
    seconds: parseInt(secondsInput.value),
  };
}

function handleInput(currentInput, nextInputId) {
  var inputValue = currentInput.value;
  if (inputValue.length === 2) {
    var nextInput = document.getElementById(nextInputId);
    nextInput.focus();
  }
  currentInput.style.color = "var(--white-color)";
}

function inputCheck() {
  if (timerCounterNumbers.seconds > 59 || timerCounterNumbers.seconds < 0) {
    secondsInput.style.color = "RED";
  } else if (
    timerCounterNumbers.minutes > 59 ||
    timerCounterNumbers.minutes < 0
  ) {
    minutesInput.style.color = "RED";
  } else if (timerCounterNumbers.minutes < 0) {
    hoursInput.style.color = "RED";
  } else if (overallSeconds() <= 0) {
    minutesInput.style.color = "RED";
    secondsInput.style.color = "RED";
    hoursInput.style.color = "RED";
    showAlert("Add any Timer value Over 0");
  } else return true;
}

function formatInput(currentInput, value) {
  if (value === "") currentInput.value = "00";
  else if (parseInt(value) < 10) {
    currentInput.value = "0" + parseInt(value).toString();
  } else if (currentInput.value.length > 2) {
    currentInput.value = currentInput.value.slice(-2);
  }
}

function setTimerValue(ele) {
  let element = ele.querySelector(".counter").innerHTML;
  hoursInput.value = addzero(element.slice(0, 2));
  minutesInput.value = addzero(element.slice(3, 5));
  secondsInput.value = addzero(element.slice(6, 8));
}

function renderTimerPage() {
  timerPage.classList.remove("hide");
  timerSecPage.classList.add("hide");
  swPage.classList.add("hide");
}

// Timer Second Page
function renderTimerSecPage() {
  timerPage.classList.add("hide");
  timerSecPage.classList.remove("hide");
  swPage.classList.add("hide");
}

function overallSeconds() {
  return (
    timerCounterNumbers.hours * 60 * 60 +
    timerCounterNumbers.minutes * 60 +
    timerCounterNumbers.seconds
  );
}

function percentage(number) {
  return 100 - (number * 100) / NumberOfSeconds;
}

// Stopwatch Page
stopwatchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  stopwatchBtn.style = "opacity: 1;text-decoration: underline;";
  timerBtn.style = "opacity: 0.8;text-decoration: none;";
  renderSwPage();
});

startSwBtn.onclick = function () {
  clearInterval(swInterval);
  if (startSwBtn.innerHTML == "Start") {
    restCounter(swCounterNumbers);
    startStopWatch();
    lapSwBtn.removeAttribute("disabled");
    startSwBtn.innerHTML = "Pause";
    startSwBtn.classList.add("pause-btn");
    startSwBtn.classList.remove("start-btn");
  } else if (startSwBtn.innerHTML == "Pause") {
    startSwBtn.innerHTML = "Resume";
    lapSwBtn.innerHTML = "Reset";
    startSwBtn.classList.remove("pause-btn");
    startSwBtn.classList.add("resume-btn");
  } else if (startSwBtn.innerHTML == "Resume") {
    startSwBtn.innerHTML = "Pause";
    lapSwBtn.innerHTML = "Lap";
    startStopWatch();
    startSwBtn.classList.add("pause-btn");
    startSwBtn.classList.remove("resume-btn");
  }
};

lapSwBtn.onclick = function () {
  if (lapSwBtn.innerHTML == "Reset") {
    lapSwBtn.innerHTML = "Lap";
    startSwBtn.innerHTML = "Start";
    startSwBtn.classList.remove("resume-btn");
    startSwBtn.classList.add("start-btn");
    lapSwBtn.setAttribute("disabled", "disabled");
    restCounter(swCounterNumbers);
    stopwatchCounter.innerHTML = formatSwTime(swCounterNumbers);
  }
};

function startStopWatch() {
  swInterval = setInterval(function () {
    swCounterNumbers.seconds++;
    if (swCounterNumbers.seconds == 60) {
      swCounterNumbers.seconds = 0;
      swCounterNumbers.minutes++;
      if (swCounterNumbers.minutes == 60) {
        swCounterNumbers.hours++;
        swCounterNumbers.minutes = 0;
      }
    }
    stopwatchCounter.innerHTML = formatSwTime(swCounterNumbers);
  }, 1000);
}

function renderSwPage() {
  timerPage.classList.add("hide");
  timerSecPage.classList.add("hide");
  swPage.classList.remove("hide");
}
