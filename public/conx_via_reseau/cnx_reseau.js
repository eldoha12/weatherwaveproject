window.onload = function () {
    google.accounts.id.initialize({
      client_id: "VOTRE_GOOGLE_CLIENT_ID.apps.googleusercontent.com", 
      callback: handleGoogleSignIn
    });
  
    google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      { theme: "outline", size: "large" }
    );
  };
  

  function handleGoogleSignIn(response) {
    console.log("Google ID Token: ", response.credential);
    alert("Connecté avec Google !");
    
  }
  
  
  window.fbAsyncInit = function () {
    FB.init({
      appId: "VOTRE_FACEBOOK_APP_ID", 
      cookie: true,
      xfbml: true,
      version: "v16.0"
    });
  };
  
  
  document.getElementById("facebook-btn").addEventListener("click", () => {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log("Bienvenue, utilisateur Facebook !");
        alert("Connecté avec Facebook !");
        
        console.log("Facebook Access Token:", response.authResponse.accessToken);
      } else {
        alert("Connexion Facebook annulée.");
      }
    }, { scope: "email" }); 
  });
  
  document.getElementById("twitter-btn").addEventListener("click", () => {
    alert("Redirection vers Twitter...");
    window.location.href = "http://votre-backend-url.com/auth/twitter";
  });
  