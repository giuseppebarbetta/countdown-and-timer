const startBtn = document.querySelector(".start")

let hourShower = document.querySelector(".hour")
let minuteShower = document.querySelector(".minute")
let secondShower = document.querySelector(".second")
let cron = ""

function start ()  {
    startBtn.classList.add("ocult")
    cron = setInterval ( function () {
        secondShower.innerText++

        if (parseInt(secondShower.innerText) == 60) {
            secondShower.innerText = "00";
            minuteShower.innerText++
        };
    
        if (parseInt(minuteShower.innerText) == 60) {
            minuteShower.innerText = "00"
            hourShower.innerText++
        }
    }, 1000)
}

function stop () {
    clearInterval(cron)
    secondShower.innerText = "00"
    minuteShower.innerText = "00"
    hourShower.innerText = "00"
    startBtn.classList.remove("ocult")
}

function pause () {
    clearInterval(cron)
    startBtn.classList.remove("ocult")
}