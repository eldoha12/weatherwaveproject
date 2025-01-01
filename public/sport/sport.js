const apiKey = 'votre_clé_api';
const event1Location = 'Paris,fr'; // Lieu de l'événement 1
const event2Location = 'Monaco,mc'; // Lieu de l'événement 2

// Fonction pour récupérer la météo pour un lieu
function getWeather(location, eventId) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=fr`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = `${data.weather[0].description}, ${data.main.temp}°C`;
            document.getElementById(eventId).textContent = weather;
        })
        .catch(error => {
            console.error('Erreur de récupération des données météo:', error);
        });
}

// Appel des fonctions pour récupérer les données pour chaque événement
getWeather(event1Location, 'event1-weather');
getWeather(event2Location, 'event2-weather');
