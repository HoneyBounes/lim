// Target date (27 June 2025)
const startDate = new Date("2025-06-27T00:00:00");

// This is the variable you wanted
let timer = "";

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        timer = "The date hasn't started yet.";
    } else {
        const seconds = Math.floor(diff / 1000);

        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;

        timer = `I love you for ${days} days ${hours} hours ${minutes} minutes ${secs} seconds`;
    }

    // Update HTML
    document.getElementById("timer").textContent = timer;
}

// Run immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);