const videos = [
    'videos/weather1.mp4', // Vidéo de nuages
    'videos/weather2.mp4', // Vidéo de pluie
    'videos/weather3.mp4', // Vidéo ensoleillée
    'videos/weather4.mp4',
    'videos/weather5.mp4',
];

function setRandomVideo() {
    const videoElement = document.getElementById('background-video');
    const randomIndex = Math.floor(Math.random() * videos.length);
    const videoSource = videoElement.querySelector('source');
    
    // Vérifie si le fichier vidéo existe
    const videoUrl = videos[randomIndex];
    fetch(videoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Video file not found');
            }
            // Si la vidéo est trouvée, l'assigner
            videoSource.src = videoUrl;
            videoElement.load(); // Recharge la vidéo avec la nouvelle source
        })
        .catch(error => {
            console.error("Error loading video:", error);
            // Charger une vidéo par défaut si la vidéo ne peut pas être trouvée
            videoSource.src = 'videos/weather1.mp4'; // Par exemple, vidéo par défaut
            videoElement.load();
        });
}

// Fonction pour afficher un message dynamique selon l'heure
function displayGreeting() {
    const currentHour = new Date().getHours();
    const greetingMessage = document.querySelector('.overlay p');

    if (currentHour < 12) {
        greetingMessage.textContent = "Good Morning! Start your day with accurate weather updates.";
    } else if (currentHour < 18) {
        greetingMessage.textContent = "Good Afternoon! Stay updated with the latest weather.";
    } else {
        greetingMessage.textContent = "Good Evening! Check the weather before your plans.";
    }
}

// Initialisation lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    setRandomVideo(); // Charge une vidéo aléatoire
    displayGreeting(); // Affiche un message de bienvenue
});
