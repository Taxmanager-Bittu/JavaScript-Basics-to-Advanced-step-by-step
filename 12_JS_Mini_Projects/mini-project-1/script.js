let is24Hour = false;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (!is24Hour) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    hours = pad(hours);
    minutes = pad(minutes);
    seconds = pad(seconds);

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

function pad(n) {
    return n < 10 ? '0' + n : n;
}

function toggleFormat() {
    is24Hour = !is24Hour;
    updateTime();
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

setInterval(updateTime, 1000);
updateTime();