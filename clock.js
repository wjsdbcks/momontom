const clockContainer = document.querySelector(".js-clock"),
  clockTilte = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTilte.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
function init() {
    getTime();
    setInterval(getTime,1000);
}

init();