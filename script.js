function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

// Update the date and time immediately upon loading the page
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
