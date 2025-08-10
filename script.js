document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username is too short.");
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email format.");
        }
        
        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short.");
        }

        if (isValid) {
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.style.display = "block"; // Ensure feedbackDiv is visible
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red for error messages
        }
    });
});
