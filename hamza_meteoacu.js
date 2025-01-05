const API_KEY = '8556d044f9f0afa3f77c4a207ec2428a'; // Remplacez par votre clé API OpenWeatherMap

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const ctx = document.getElementById('temperature-chart').getContext('2d');
let tempChart;

const initMap = () => {
  return L.map('map').setView([0, 0], 2);
};

const map = initMap();
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Veuillez entrer un nom de ville.');
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
    );

    if (!response.ok) {
      throw new Error('Ville introuvable.');
    }

    const data = await response.json();
    const { main, weather, wind: windData, coord } = data;

    // Mettre à jour l'interface utilisateur
    cityName.textContent = data.name;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    temperature.textContent = `Température : ${main.temp}°C`;
    description.textContent = `Description : ${weather[0].description}`;
    humidity.textContent = `Humidité : ${main.humidity}%`;
    wind.textContent = `Vent : ${windData.speed} km/h`;

    // Mettre à jour la carte
    map.setView([coord.lat, coord.lon], 13);
    L.marker([coord.lat, coord.lon]).addTo(map).bindPopup(`${data.name}, ${data.sys.country}`).openPopup();

    // Mettre à jour le graphique
    if (tempChart) {
      tempChart.destroy();
    }
    tempChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [
          {
            label: 'Température (°C)',
            data: [main.temp - 2, main.temp - 1, main.temp, main.temp + 1, main.temp + 2, main.temp + 1, main.temp, main.temp - 1], // Exemple
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    alert(error.message);
  }
});
