document.querySelector('.signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
  }

  try {
      const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
          alert('Inscription réussie');
          window.location.href = "../index.html";  // Rediriger vers la page de connexion
      } else {
          alert(data.message);  // Afficher l'erreur
      }
  } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur est survenue lors de l'inscription.");
  }
});
