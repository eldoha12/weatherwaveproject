// script.js
const apiKey = "82f9f4a18e150ac07c1db29c4a55410a"; // Remplacez par votre clé OpenWeather
const destinationsDiv = document.getElementById("destinations");
const addCityBtn = document.getElementById("add-city-btn");

addCityBtn.addEventListener("click", () => {
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
    const destinationDiv = document.createElement("div");
    destinationDiv.className = "destination";

    destinationDiv.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Température : ${data.main.temp}°C</p>
        <p>🌥️ Météo : ${data.weather[0].description}</p>
        <p>💧 Humidité : ${data.main.humidity}%</p>
        <p>🌬️ Vent : ${data.wind.speed} m/s</p>
    `;

    destinationsDiv.appendChild(destinationDiv);
}
