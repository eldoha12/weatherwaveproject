// Fonction pour obtenir la météo d'une ville en utilisant l'API OpenWeatherMap
async function getWeather() {
    const city = document.getElementById('city').value.trim(); // Récupère la ville saisie
    if (city === "") {
        alert("Veuillez entrer une ville.");
        return;
    }

    const apiKey = 'VOTRE_CLÉ_API';  // Remplacez par votre clé API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            // Mise à jour des informations météo
            const temperature = document.getElementById('temperature');
            const condition = document.getElementById('condition');
            const weatherIcon = document.getElementById('weather-icon');

            temperature.textContent = `Température: ${data.main.temp} °C`;
            condition.textContent = `Condition: ${data.weather[0].description}`;

            // Mise à jour de l'icône météo
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.alt = data.weather[0].description;
        } else {
            alert("Ville introuvable. Veuillez vérifier le nom de la ville.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo:", error);
        alert("Erreur de connexion à l'API météo. Veuillez réessayer plus tard.");
    }
}

// Fonction pour initialiser l'application (si besoin)
document.addEventListener('DOMContentLoaded', () => {
    console.log("WeatherWave est prêt !");
});


const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const navbar = document.querySelector(".navbar");

// Vérifier le thème sauvegardé dans le localStorage
if (localStorage.getItem("theme") === "night") {
    body.classList.add("night-theme");
    navbar.classList.add("night-theme");
} else {
    body.classList.add("day-theme");
    navbar.classList.add("day-theme");
}

// Basculer entre le thème jour/nuit
themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("night-theme");
    body.classList.toggle("day-theme");
    navbar.classList.toggle("night-theme");
    navbar.classList.toggle("day-theme");

    // Sauvegarder le thème choisi dans le localStorage
    if (body.classList.contains("night-theme")) {
        localStorage.setItem("theme", "night");
    } else {
        localStorage.setItem("theme", "day");
    }
});
