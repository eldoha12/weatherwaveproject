// script.js
const apiKey = "82f9f4a18e150ac07c1db29c4a55410a"; 
const weatherInfo = document.getElementById("weather-info");
const shareLink = document.getElementById("share-link");

document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Veuillez entrer une ville !");
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
        );

        if (!response.ok) {
            throw new Error("Ville non trouvée");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    cityName.textContent = `🌍 Ville : ${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡️ Température : ${data.main.temp}°C`;
    description.textContent = `🌥️ Météo : ${data.weather[0].description}`;

    weatherInfo.style.display = "block";

    // Générer le lien de partage
    const shareData = `Découvrez les prévisions météo pour ${data.name} : Température ${data.main.temp}°C, ${data.weather[0].description}`;
    const shareUrl = `https://example.com/share?data=${encodeURIComponent(shareData)}`;
    generateShareLink(shareUrl);
}

function generateShareLink(url) {
    shareLink.textContent = `Partagez ce lien : ${url}`;
    shareLink.classList.remove("hidden");
}

document.getElementById("share-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(shareLink.textContent)
        .then(() => alert("Lien copié dans le presse-papiers !"))
        .catch(() => alert("Impossible de copier le lien."));
});
