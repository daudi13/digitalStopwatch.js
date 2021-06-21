let [hours, minutes, seconds, milliseconds, days] = [0, 0, 0, 0, 0]
const start = document.getElementById('start');
const pause = document.getElementById('stop');
const reset = document.getElementById('reset');
const display = document.getElementById('display');
const lapDisplay = document.querySelector('.lapDisplay');

start.addEventListener('click', () => {
    int = setInterval(startTimer, 10);
})

pause.addEventListener('click', () => {
    clearInterval(int);
})

document.getElementById('lap').addEventListener('click', () => {
    lapDisplay.innerHTML = `${display.innerText }`
})

reset.addEventListener('click', () => {
    clearInterval(int)
    display.innerHTML = `00:00:000`
})


function startTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++

        if (seconds === 60) {
            seconds = 0;
            minutes++

            if (minutes === 60) {
                minutes = 0;
                hours++

                if (hours === 24) {
                    hours = 0
                    days++
                }
            }
        }
    }

    let ms = milliseconds < 100 ? '0' + milliseconds : milliseconds;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;
    let d = days < 10 ? '0' + days : days;

    display.innerHTML = `${d}:${h}:${m}:${s}:${ms}`

}

