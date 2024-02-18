const startBtn = document.querySelector(".start")

let minuteShower = document.querySelector(".minute")
let secondShower = document.querySelector(".second")
let inputValue = document.getElementById("time")
let cron = ""

inputValue.focus()

function start ()  {
    if(inputValue.value == "") {
        alert("Digite quanto tempo deseja no timer!")
    } else {
        minuteShower.innerText = (inputValue.value - 1)
        inputValue.classList.add("ocult")
        secondShower.innerText = "59";
        startBtn.classList.add("ocult")
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