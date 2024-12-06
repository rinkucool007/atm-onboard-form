// Login functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'admin' && password === 'admin') {
          window.location.href = 'main.html';
        } else {
          errorMessage.classList.remove('hidden');
        }
      });
    }
  
    // Form submission
    const onboardForm = document.getElementById('onboard-form');
    const completionMessage = document.getElementById('completion-message');
    const submitBtn = document.getElementById('submit-btn');
  
    if (onboardForm) {
      onboardForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'success.html'; // Redirect to success page
        // completionMessage.classList.remove('hidden');
      });
  
      submitBtn.addEventListener('mousedown', () => {
        submitBtn.style.backgroundColor = 'green';
      });
  
      submitBtn.addEventListener('mouseup', () => {
        submitBtn.style.backgroundColor = 'blue';
      });
    }


  });
  