// Target date (27 June 2025)
const startDate = new Date("2025-06-27T00:00:00");

let timer = "";

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        timer = "Још није почело!";
    } else {
        const seconds = Math.floor(diff / 1000);

        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;

        timer = `...и то ${days} дана ${hours} сати ${minutes} минута ${secs} секунди! <3`;
    }

    document.getElementById("timer").textContent = timer;
}

updateTimer();
setInterval(updateTimer, 1000);