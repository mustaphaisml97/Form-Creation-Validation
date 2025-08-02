document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Form and Feedback Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Step 2: Form Submission Event
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Step 3: Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Step 4: Validation Setup
    let isValid = true;
    let messages = [];

    // Step 5: Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Step 6: Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Step 7: Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 8: Display Feedback
    if (!isValid) {
      feedbackDiv.innerHTML = `<ul style="color:red;">${messages.map(msg => `<li>${msg}</li>`).join('')}</ul>`;
    } else {
      feedbackDiv.innerHTML = `<p style="color:green;">Form submitted successfully!</p>`;
    }
  });
});
