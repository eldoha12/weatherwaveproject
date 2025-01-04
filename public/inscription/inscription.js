// Gestion de la soumission du formulaire
document.querySelector('.signup-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche la soumission par défaut

  const inputs = document.querySelectorAll('.signup-form input');
  let valid = true;

  // Réinitialiser les erreurs
  inputs.forEach(input => {
    const error = input.nextElementSibling; // Supposant que l'élément suivant est un message d'erreur
    if (error) error.style.display = 'none';
    input.classList.remove('error');
  });

  // Vérifier que tous les champs sont remplis
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, 'Ce champ est requis.');
      valid = false;
    }
  });

  // Validation de l'email
  const email = document.querySelector('input[placeholder="Adresse email"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "L'adresse email est invalide.");
    valid = false;
  }

  // Validation des mots de passe
  const password = document.querySelector('input[placeholder="Mot de passe"]');
  const confirmPassword = document.querySelector('input[placeholder="Confirmer le mot de passe"]');
  if (password.value.trim() !== confirmPassword.value.trim()) {
    showError(confirmPassword, 'Les mots de passe ne correspondent pas.');
    valid = false;
  }

  // Si tout est valide, afficher un message et rediriger
  if (valid) {
    alert('Inscription réussie !');
    window.location.href = "../connection/connection.html"; // Redirection vers la page de connexion
  }
});

// Fonction pour afficher les messages d'erreur
function showError(input, message) {
  let error = input.nextElementSibling; // Supposant que l'élément suivant est le message d'erreur
  if (!error || !error.classList.contains('error-message')) {
    // Si l'élément suivant n'existe pas, on le crée
    error = document.createElement('span');
    error.classList.add('error-message');
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
  error.style.display = 'block';
  input.classList.add('error');
}
