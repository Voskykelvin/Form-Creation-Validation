document.addEventListener('DOMContentLoaded', () => {
  // 2. Select the form element
  const form = document.getElementById('registration-form');
  // 3. Select the feedback container
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission for validation  
    // 4. Retrieve and trim input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 5. Initialize validation tracking
    let isValid = true;
    const messages = [];

    // Username Validation (iii)
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // 6. Email Validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // 7. Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // 8. Display feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
    }
  });
});
