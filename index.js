const toggleButton = document.getElementById('toggleTheme');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});
