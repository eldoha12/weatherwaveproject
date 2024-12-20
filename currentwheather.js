const apiKey = "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API d'OpenWeatherMap
const weatherIcon = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const descriptionEl = document.getElementById("description");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");

// Obtenir la localisation et les données météo
function getWeather() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=fr`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      // Mettre à jour l'interface
      locationEl.textContent = `${data.name}, ${data.sys.country}`;
      descriptionEl.textContent = data.weather[0].description;
      temperatureEl.textContent = `Température : ${data.main.temp} °C`;
      humidityEl.textContent = `Humidité : ${data.main.humidity}%`;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo :", error);
    }
  });
}

// Lancer la fonction au chargement de la page
window.onload = getWeather;
