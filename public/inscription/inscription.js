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
          window.location.href = "../interface/app.html";  // Rediriger vers la page de connexion
      } else {
          alert(data.message);  // Afficher l'erreur
      }
  } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur est survenue lors de l'inscription.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    nameInput.addEventListener("input", () => {
      const fullName = nameInput.value.trim().toLowerCase();
      if (fullName) {
        // Remplace les espaces par des points et enlève les caractères spéciaux
        const sanitizedFullName = fullName
          .replace(/\s+/g, ".") // Remplace les espaces par des points
          .replace(/[^a-zA-Z.]/g, ""); // Enlève les caractères non autorisés
        const generatedEmail = `${sanitizedFullName}@weatherwave.com`;
        emailInput.value = generatedEmail;
      } else {
        emailInput.value = ""; // Efface l'email si le nom est vide
      }
    });
  });
  