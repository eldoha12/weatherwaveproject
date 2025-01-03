document.querySelector('.login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
          // Connexion réussie, rediriger vers app.html
          alert('Connexion réussie');
          window.location.href = "../interface/app.html";  // Rediriger vers la page principale
      } else {
          alert(data.message);  // Afficher l'erreur
      }
  } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur est survenue lors de la connexion.");
  }
});
