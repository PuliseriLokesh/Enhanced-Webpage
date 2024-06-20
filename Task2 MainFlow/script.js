document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display an alert with the form data
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});
