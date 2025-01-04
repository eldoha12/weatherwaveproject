// Exemple de clé d'API pour OpenWeatherMap (Remplacez par votre clé réelle)
const API_KEY =  "d5922e4d4b67242e4c7dd35c130a49f8";

// Événement pour le bouton
document.getElementById("get-forecast").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    const forecastResult = document.getElementById("forecast-result");
    const cityName = document.getElementById("city-name");
    const weatherDuration = document.getElementById("weather-duration");

    if (city === "") {
        alert("Veuillez entrer une ville !");
        return;
    }

    // Appel à l'API météo
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`)
        .then(response => {
            if (!response.ok) throw new Error("Ville introuvable !");
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main.toLowerCase();
            cityName.textContent = `Prévisions pour ${city}`;
            
            if (weather === "rain") {
                weatherDuration.textContent = "🌧️ Il va pleuvoir pendant environ 2 à 3 heures.";
            } else if (weather === "snow") {
                weatherDuration.textContent = "❄️ Il va neiger pendant environ 1 à 2 heures.";
            } else {
                weatherDuration.textContent = "☀️ Pas de pluie ou de neige prévue pour le moment.";
            }

            forecastResult.style.display = "block";
        })
        .catch(error => {
            cityName.textContent = "Erreur !";
            weatherDuration.textContent = "Impossible de trouver les prévisions pour cette ville.";
            forecastResult.style.display = "block";
        });
});
