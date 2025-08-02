 
      document.addEventListener('DOMContentLoaded', function() {
            // Select form and feedback elements
            const form = document.getElementById('registration-form');
            const feedbackDiv = document.getElementById('form-feedback');

            // Add submit event listener
            form.addEventListener('submit', function(event) {
                // Prevent form submission
                event.preventDefault();

                // Get and trim input values
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                // Initialize validation variables
                let isValid = true;
                const messages = [];

                // Validate username (min 3 characters)
                if (username.length < 3) {
                    isValid = false;
                    messages.push('Username must be at least 3 characters long.');
                }

                // Validate email (must contain @ and .)
                if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
                    isValid = false;
                    messages.push('Please enter a valid email address (must contain @ and . in the correct order).');
                }

                // Validate password (min 8 characters)
                if (password.length < 8) {
                    isValid = false;
                    messages.push('Password must be at least 8 characters long.');
                }

                // Display feedback
                feedbackDiv.style.display = 'block';
                
                if (isValid) {
                    feedbackDiv.textContent = 'Registration successful!';
                    feedbackDiv.className = 'success';
                    // Here you could actually submit the form to a server
                    // form.submit();
                } else {
                    feedbackDiv.innerHTML = messages.join('<br>');
                    feedbackDiv.className = 'error';
                }
            });
        });
