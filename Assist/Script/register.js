document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.textContent = 'Creating account...';
            button.disabled = true;
        }

        alert('Account created successfully!');
        form.reset();

        setTimeout(() => {
            window.location.href = '../Auth/signin.html';
        }, 800);
    });
});
