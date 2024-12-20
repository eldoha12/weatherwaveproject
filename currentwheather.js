const apiKey = 'd5922e4d4b67242e4c7dd35c130a49f8'; // Remplacez par votre clé API
const weatherIcon = document.getElementById('weather-icon');
const locationEl = document.getElementById('location');
const descriptionEl = document.getElementById('description');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const errorMessage = document.getElementById('error-message');

/**
 * Obtenir les données météo à partir de l'API OpenWeatherMap.
 */
async function getWeather() {
  try {
    // Vérifier si la géolocalisation est disponible
    if (!navigator.geolocation) {
      showError('La géolocalisation n\'est pas disponible sur votre appareil.');
      return;
    }

    // Obtenir la position de l'utilisateur
    const position = await getUserLocation();
    const { latitude, longitude } = position.coords;

    // Construire l'URL de l'API avec les coordonnées
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=fr`;

    // Récupérer les données météo
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Erreur lors de la récupération des données météo');

    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {
    showError(error.message);
  }
}

/**
 * Obtenir la position de l'utilisateur.
 */
function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/**
 * Mettre à jour l'interface avec les données météorologiques.
 */
function updateWeatherUI(data) {
  const { name, sys, weather, main } = data;
  
  locationEl.textContent = `${name}, ${sys.country}`;
  descriptionEl.textContent = weather[0].description;
  temperatureEl.textContent = `Température : ${main.temp} °C`;
  humidityEl.textContent = `Humidité : ${main.humidity}%`;

  // Mettre à jour l'icône météo
  const iconCode = weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Cacher le message d'erreur s'il existe
  errorMessage.classList.add('hidden');
}

/**
 * Afficher un message d'erreur dans l'interface utilisateur.
 */
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

// Lancer la récupération des données météo lorsque la page est chargée
window.onload = getWeather;
