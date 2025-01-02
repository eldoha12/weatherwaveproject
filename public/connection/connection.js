document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simule une vérification des identifiants
    if (email === "test@exemple.com" && password === "123456") {
      // Redirige vers la page d'interface après une connexion réussie
      window.location.href = "../interface/app.html";
    } else {
      // Affiche un message d'erreur si les identifiants sont incorrects
      alert("Adresse e-mail ou mot de passe incorrect.");
    }
  });
  