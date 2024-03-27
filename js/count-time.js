document.addEventListener('DOMContentLoaded', function () {
    function updateCountdown() {
        const startDate = new Date(2024, 2, 23, 21, 0, 0);
        const now = new Date();
        const difference = now - startDate;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        } else {
            document.getElementById('countdown').innerText = 'Chưa đến ngày 23/03/2024';
        }
    }
    setInterval(updateCountdown, 1000);
});