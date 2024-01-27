
function displayTimeNow(){
    let date = new Date()
    let hourNow = date.getHours();
    let minutesNow = date.getMinutes();
    let secondsNow = date.getSeconds();


    document.querySelector("#hourOutput").textContent = "Hours:" + " " + hourNow;
    document.querySelector("#minuteOutput").textContent = "Minutes:" + " " + minutesNow;
    document.querySelector("#secondOutput").textContent = "Seconds:" + " " + secondsNow;
};

setInterval(displayTimeNow,1000)
