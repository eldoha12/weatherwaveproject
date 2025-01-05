// Sélection des éléments HTML
const detectButton = document.getElementById('detect-location');
const output = document.getElementById('output');

// Ajout de l'écouteur d'événement sur le bouton
detectButton.addEventListener('click', () => {
  // Vérification de l'API de géolocalisation
  if (navigator.geolocation) {
    output.textContent = "Obtention de votre position...";
    
    // Récupération de la position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        output.innerHTML = `
          <p>Latitude: <strong>${latitude}</strong></p>
          <p>Longitude: <strong>${longitude}</strong></p>
          <p><a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">Voir sur Google Maps</a></p>
        `;
      },
      (error) => {
        // Gestion des erreurs
        switch (error.code) {
          case error.PERMISSION_DENIED:
            output.textContent = "Vous avez refusé l'accès à la géolocalisation.";
            break;
          case error.POSITION_UNAVAILABLE:
            output.textContent = "Les informations de localisation ne sont pas disponibles.";
            break;
          case error.TIMEOUT:
            output.textContent = "Le temps de demande de localisation a expiré.";
            break;
          default:
            output.textContent = "Une erreur inconnue est survenue.";
        }
      }
    );
  } else {
    output.textContent = "La géolocalisation n'est pas supportée par votre navigateur.";
  }
});
