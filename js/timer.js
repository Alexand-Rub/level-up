let time = 1800;
const countDoenEl = document.getElementById("countdoen");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec: sec;
    countDoenEl.innerHTML = `До конца акции: <span>${min}:${sec}</span>`;
    time--;
}