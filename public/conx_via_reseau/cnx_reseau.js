// script.js

// === GOOGLE AUTHENTICATION ===
window.onload = function () {
    google.accounts.id.initialize({
      client_id: "VOTRE_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Remplacez par votre Google Client ID
      callback: handleGoogleSignIn
    });
  
    google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      { theme: "outline", size: "large" }
    );
  };
  
  // Gestion de la réponse Google
  function handleGoogleSignIn(response) {
    console.log("Google ID Token: ", response.credential);
    alert("Connecté avec Google !");
    // Envoyez le token au backend pour validation
  }
  
  // === FACEBOOK AUTHENTICATION ===
  window.fbAsyncInit = function () {
    FB.init({
      appId: "VOTRE_FACEBOOK_APP_ID", // Remplacez par votre Facebook App ID
      cookie: true,
      xfbml: true,
      version: "v16.0"
    });
  };
  
  // Bouton Facebook
  document.getElementById("facebook-btn").addEventListener("click", () => {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log("Bienvenue, utilisateur Facebook !");
        alert("Connecté avec Facebook !");
        // Envoyez le token au backend pour validation
        console.log("Facebook Access Token:", response.authResponse.accessToken);
      } else {
        alert("Connexion Facebook annulée.");
      }
    }, { scope: "email" }); // Permissions demandées
  });
  
  document.getElementById("twitter-btn").addEventListener("click", () => {
    alert("Redirection vers Twitter...");
    window.location.href = "http://votre-backend-url.com/auth/twitter";
  });
  