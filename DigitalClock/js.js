function currentTimeClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    document.getElementById("s").innerHTML = '' + currentSeconds;
    document.getElementById("m").innerHTML = '' + currentMinutes;
    document.getElementById("h").innerHTML = '' + currentHours;
    setTimeout(currentTimeClock, 1000);
}
currentTimeClock();

