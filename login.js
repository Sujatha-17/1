document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
  
    // Perform login validation (for simplicity, using hardcoded values)
    if (username === 'admin' && password === 'admin123') {
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('username');
      }
      window.location.href = 'admin.html';
    } else {
      alert('Invalid username or password');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    if (rememberMe) {
      document.getElementById('username').value = localStorage.getItem('username');
      document.getElementById('rememberMe').checked = true;
    }
  });
  
  document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Please contact the administrator to reset your password.');
  });
  