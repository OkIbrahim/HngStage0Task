function updateCurrentTimeUTC() {
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('currentTimeUTC').textContent = `Current Time (UTC): ${utcString}`;
}

updateCurrentTimeUTC();
setInterval(updateCurrentTimeUTC, 1000);