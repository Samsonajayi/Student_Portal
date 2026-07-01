document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.textContent = 'Logging in...';
            button.disabled = true;
        }

        alert('Login successful!');
        form.reset();

        setTimeout(() => {
            window.location.href = '../Html/dashboard.html';
        }, 800);
    });
});
