document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const message = document.querySelector('#message').value;
        const email = 'southwestindiacoffee@gmail.com';
        const subject = 'Wholesale Inquiry';
        const body = `Name: ${name}\nMessage: ${message}`;
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
});
