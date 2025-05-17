console.log("Website loaded");

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted:", { name, email, message });

    // Here you can add code to send the form data to a server or an email address
});
