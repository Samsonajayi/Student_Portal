document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const button = form.querySelector("button[type='submit']");
            if (button) {
                button.textContent = 'Sent!';
                button.disabled = true;
            }

            alert('Thank you! Your message has been received.');
            form.reset();

            setTimeout(() => {
                if (button) {
                    button.textContent = 'Send';
                    button.disabled = false;
                }
            }, 2000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
