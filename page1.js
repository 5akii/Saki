// Form Validation
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
  
    // Validate Email
    if (!email) {
      emailError.textContent = 'Please enter a valid email or phone number.';
      emailError.style.display = 'block';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
    }
  
    // Validate Password
    if (!password) {
      passwordError.textContent = 'Your password must contain between 4 and 60 characters.';
      passwordError.style.display = 'block';
    } else if (password.length < 4 || password.length > 60) {
      passwordError.textContent = 'Your password must contain between 4 and 60 characters.';
      passwordError.style.display = 'block';
    }
  
    // If no errors, submit the form
    if (emailError.style.display === 'none' && passwordError.style.display === 'none') {
      alert('Sign In Successful!');
      // You can redirect the user or send the data to a server here
    }
  });