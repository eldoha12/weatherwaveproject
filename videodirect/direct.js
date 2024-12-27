// Exemple d'utilisation basique
const videoContainer = document.getElementById("live-video");

// Fonction pour charger un flux vidéo basé sur une région
function loadVideo(region) {
  const videos = {
    france: "https://www.youtube.com/embed/live_stream?channel=ID_CHANNEL_FR",
    usa: "https://www.youtube.com/embed/live_stream?channel=ID_CHANNEL_USA",
    default: "https://www.youtube.com/embed/live_stream?channel=ID_DEFAULT_CHANNEL"
  };

  videoContainer.src = videos[region] || videos.default;
}

// Détecter la localisation de l'utilisateur (optionnel)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Déduire une région (simplifié ici)
      const region = latitude > 45 ? "france" : "usa";
      loadVideo(region);
    },
    (error) => {
      console.error("Impossible de récupérer la localisation", error);
      loadVideo("default");
    }
  );
} else {
  loadVideo("default");
}
