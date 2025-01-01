const videoContainer = document.getElementById("live-video");

// Liste des vidéos par région
const videos = {
  usa: "./videos/video1.mp4",
  france:"./videos/video2.mp4",
  maroc: "./videos/video3.mp4"
};

// Fonction pour charger une vidéo en fonction de la région
function loadVideo(region) {
  if (videos[region]) {
    videoContainer.src = videos[region];
  } else {
    console.error("Région inconnue :", region);
  }
}

// Charger une vidéo par défaut
loadVideo("france");
