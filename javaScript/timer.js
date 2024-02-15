let minuteShower = document.querySelector(".minute")
let secondShower = document.querySelector(".second")
let inputValue = document.getElementById("time")
let cron = ""

inputValue.focus()

function start ()  {
    minuteShower.innerText = (inputValue.value - 1)
    inputValue.classList.add("ocult")
    secondShower.innerText = "59";
    cron = setInterval ( function () {
        console.log(minuteShower.innerText)
        
        secondShower.innerText--

        if (parseInt(secondShower.innerText) == 0) {
            secondShower.innerText = "59";
            minuteShower.innerText--
        };

        if (parseInt(minuteShower.innerText) == 0 && (parseInt(secondShower.innerText) == 1)) {
            stop()            
        }
    
    }, 1000)
}

function stop () {
    clearInterval(cron);
    secondShower.innerText = "00";
    minuteShower.innerText = "00";
    inputValue.classList.remove("ocult");
    inputValue.value = "";
    inputValue.focus();
}

function pause () {
    clearInterval(cron)
}