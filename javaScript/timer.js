const startBtn = document.querySelector(".start")

let minuteShower = document.querySelector(".minute")
let secondShower = document.querySelector(".second")
let inputValue = document.getElementById("time")
let cron = ""

inputValue.focus()

function workingTimer() {
            
    secondShower.innerText = (parseInt(secondShower.innerText) - 1).toString().padStart(2, '0')

    if (parseInt(secondShower.innerText) == 0) {
        secondShower.innerText = "59";
        minuteShower.innerText = (parseInt(minuteShower.innerText) - 1).toString().padStart(2, '0')
    };

    if (parseInt(minuteShower.innerText) == 0 && (parseInt(secondShower.innerText) == 1)) {
        stop()            
    }
}

function start ()  {
    if(inputValue.value == "") {
        alert("Digite quanto tempo deseja no timer!")

    } else if (secondShower.innerText != "00" && minuteShower.innerText != "00"){
        cron = setInterval (  workingTimer, 1000)
        startBtn.classList.add("ocult")
    } else {
        minuteShower.innerText = (parseInt(inputValue.value - 1).toString().padStart(2, '0'))
        inputValue.classList.add("ocult")
        secondShower.innerText = "59";
        startBtn.classList.add("ocult")
        cron = setInterval (  workingTimer, 1000)
    }
}

function pause () {
    clearInterval(cron);
    startBtn.classList.remove("ocult")
}

function stop () {
    clearInterval(cron);
    secondShower.innerText = "00";
    minuteShower.innerText = "00";
    inputValue.classList.remove("ocult");
    inputValue.value = "";
    inputValue.focus();
    startBtn.classList.remove("ocult")
}