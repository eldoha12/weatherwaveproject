const videoContainer = document.getElementById("live-video");

// Liste des vidéos locales
const videos = [
  "./videos/video1.mp4",
  "./videos/video2.mp4",
  "./videos/video3.mp4"
];

// Fonction pour charger une vidéo aléatoire à chaque actualisation
function loadRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videos.length);
  videoContainer.src = videos[randomIndex];
}

// Détecter la localisation de l'utilisateur (optionnel)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Déduire une région (simplifié ici)
      const region = latitude > 45 ? "france" : "usa";
      loadRandomVideo(); // Charge une vidéo aléatoire
    },
    (error) => {
      console.error("Impossible de récupérer la localisation", error);
      loadRandomVideo(); // Charge une vidéo aléatoire en cas d'erreur
    }
  );
} else {
  loadRandomVideo(); // Charge une vidéo aléatoire si la géolocalisation est désactivée
}
