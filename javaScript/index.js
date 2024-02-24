const startBtn = document.querySelector(".start")

let hourShower = document.querySelector(".hour")
let minuteShower = document.querySelector(".minute")
let secondShower = document.querySelector(".second")
let cron = ""

function start ()  {
    startBtn.classList.add("ocult")
    cron = setInterval ( function () {
        
        //secondShower.innerText++
        secondShower.innerText = (parseInt(secondShower.innerText) + 1).toString().padStart(2, '0')

        if (parseInt(secondShower.innerText) == 60) {
            secondShower.innerText = "00";
            minuteShower.innerText = (parseInt(minuteShower.innerText) + 1).toString().padStart(2, '0')
        };
    
        if (parseInt(minuteShower.innerText) == 60) {
            minuteShower.innerText = "00"
            hourShower.innerText = (parseInt(hourShower.innerText) + 1).toString().padStart(2, '0')
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