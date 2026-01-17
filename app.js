// variables to store time
let sec = 0;
let min = 0;
let hr = 0;

// to store interval
let interval = null;

// function to start stopwatch
function start() {

    // prevent multiple intervals
    if (interval !== null) {
        return;
    }

    interval = setInterval(function () {
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        showTime();
    }, 1000);
}

// function to stop stopwatch
function stop() {
    clearInterval(interval);
    interval = null;
}

// function to reset stopwatch
function reset() {
    stop();
    sec = 0;
    min = 0;
    hr = 0;
    showTime();
}

// function to update time on screen
function showTime() {

    let s = sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;
    let h = hr < 10 ? "0" + hr : hr;

    document.getElementById("time").innerText =
        h + " : " + m + " : " + s;
}

