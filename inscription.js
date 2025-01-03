document.querySelector('.signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.signup-form input');
  let valid = true;

  // Réinitialiser les erreurs
  inputs.forEach(input => {
    const error = input.nextElementSibling;
    if (error) error.style.display = 'none';
    input.classList.remove('error');
  });

  // Vérifications
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, 'Ce champ est requis.');
      valid = false;
    }
  });

  const email = document.querySelector('input[placeholder="Adresse email"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "L'adresse email Invalide. ");
    valid = false;
  }

  const password = document.querySelector('input[placeholder="Mot de passe"]');
  const confirmPassword = document.querySelector('input[placeholder="Confirmer le mot de passe"]');
  if (password.value.trim() !== confirmPassword.value.trim()) {
    showError(confirmPassword, 'Les mots de passe ne correspondent pas.');
    valid = false;
  }

  if (valid) {
    alert('Inscription réussie !');
    window.location.href = "connexion.html";
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = 'block';
  input.classList.add('error');
}
