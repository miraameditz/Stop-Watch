var sec = document.getElementById("seconds")
var minute = document.getElementById("minute")
var hours = document.getElementById("hours")
var seconds;

function start() {
  seconds = setInterval(function () {
    sec.innerHTML++;
    if (sec.innerHTML == 60) {
      sec.innerHTML = "00"; 
      minute.innerHTML++;
    }

    if (minute.innerHTML == 60) {
        minute.innerHTML = "00"
        hours.innerHTML++
    }

  }, 1000);   
}

function stop() {
  clearInterval(seconds);
}

function reset() {
    sec.innerHTML = "00"
    minute.innerHTML = "00"
    hours.innerHTML = "00"
    clearInterval(seconds)
}