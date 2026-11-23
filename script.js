let toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Attiva Light Mode';
    } else {
      toggleButton.textContent = 'Attiva Dark Mode';
    }
  });
}