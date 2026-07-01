document.addEventListener('DOMContentLoaded', () => {
    const dateTimeLabel = document.getElementById('live-datetime');
    const scheduleDate = document.querySelector('.schedule-date');
    const scheduleTime = document.querySelector('.schedule-time');

    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        if (dateTimeLabel) {
            dateTimeLabel.textContent = now.toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
        }

        if (scheduleDate) {
            scheduleDate.textContent = now.toLocaleDateString([], options);
        }

        if (scheduleTime) {
            scheduleTime.textContent = now.toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
