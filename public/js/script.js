document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      this.textContent = 'Day';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      this.textContent = 'Night';
    }
  });

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = 'Day';
  }