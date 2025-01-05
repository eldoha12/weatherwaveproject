// Clé API OpenWeatherMap (vous devez remplacer par votre propre clé)
const API_KEY = '8556d044f9f0afa3f77c4a207ec2428a';

// Sélection des éléments HTML
const getWeatherButton = document.getElementById('get-weather');
const cityInput = document.getElementById('city');
const weatherOutput = document.getElementById('weather-output');

// Fonction pour obtenir les données météo
getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherOutput.innerHTML = '<p id="error">Veuillez entrer une ville valide.</p>';
    return;
  }

  weatherOutput.innerHTML = '<p>Chargement...</p>';

  try {
    // Appel à l'API météo
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
    );
    if (!response.ok) throw new Error('Ville introuvable');

    const data = await response.json();

    // Affichage des données
    const { main, weather, wind } = data;
    weatherOutput.innerHTML = `
      <h2>Météo à ${city}</h2>
      <p><strong>Température :</strong> ${main.temp}°C</p>
      <p><strong>Humidité :</strong> ${main.humidity}%</p>
      <p><strong>Conditions :</strong> ${weather[0].description}</p>
      <p><strong>Vent :</strong> ${wind.speed} km/h</p>
    `;
  } catch (error) {
    weatherOutput.innerHTML = `<p id="error">${error.message}</p>`;
  }
});
