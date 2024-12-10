// Exemple de données météo fictives
const forecastData = [
    { day: "Lundi", temp: "22°C", condition: "Soleil", icon: "☀" },
    { day: "Mardi", temp: "18°C", condition: "Nuageux", icon: "☁" },
    { day: "Mercredi", temp: "20°C", condition: "Partiellement nuageux", icon: "🌤" },
    { day: "Jeudi", temp: "19°C", condition: "Pluie", icon: "🌧" },
    { day: "Vendredi", temp: "21°C", condition: "Soleil", icon: "☀" },
    { day: "Samedi", temp: "23°C", condition: "Soleil", icon: "☀" },
    { day: "Dimanche", temp: "24°C", condition: "Orage", icon: "⛈" },
];

// Fonction pour afficher les prévisions météo
function displayWeatherForecast() {
    const weatherCardsContainer = document.getElementById('weather-cards');
    forecastData.forEach(forecast => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <h2>${forecast.day}</h2>
            <p>${forecast.icon}</p>
            <p>${forecast.temp}</p>
            <p>${forecast.condition}</p>
        `;
        weatherCardsContainer.appendChild(card);
    });
}

// Charger les prévisions au démarrage
document.addEventListener('DOMContentLoaded', displayWeatherForecast);