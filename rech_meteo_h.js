document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("city").value.trim();
    const apiKey = "votre_cle_api"; // Remplacez par votre clé API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    if (city === "") {
        displayError("Veuillez entrer une ville !");
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ville introuvable !");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            displayError(error.message);
        });
});

function displayWeather(data) {
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = `
        <h2>🌍 ${data.name}, ${data.sys.country}</h2>
        <p><strong>Température:</strong> ${data.main.temp}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidité:</strong> ${data.main.humidity}%</p>
        <p><strong>Vent:</strong> ${data.wind.speed} m/s</p>
    `;
}

function displayError(message) {
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = `<p style="color: red;">❌ ${message}</p>`;
}
