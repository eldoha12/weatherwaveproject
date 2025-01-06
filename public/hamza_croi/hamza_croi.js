const API_KEY = '82f9f4a18e150ac07c1db29c4a55410a'; // Remplacez par une clé API valide (OpenWeatherMap ou autre)
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const locationName = document.getElementById('location-name');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const sunlight = document.getElementById('sunlight');
const recommendation = document.getElementById('recommendation');
const ctx = document.getElementById('plant-growth-chart').getContext('2d');

let plantGrowthChart;

searchBtn.addEventListener('click', async () => {
  const location = locationInput.value.trim();
  if (!location) {
    alert('Veuillez entrer un lieu.');
    return;
  }

  try {
    // Appel à l'API météo (OpenWeatherMap par exemple)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Lieu introuvable ou données indisponibles.');
    }

    const data = await response.json();
    const temp = data.main.temp; // Température
    const humid = data.main.humidity; // Humidité
    const sunlightHours = Math.round((data.clouds.all / 100) * 12); // Calcul approximatif

    // Mettre à jour les résultats
    locationName.textContent = `Lieu : ${data.name}`;
    temperature.textContent = `${temp}°C`;
    humidity.textContent = `${humid}%`;
    sunlight.textContent = `${12 - sunlightHours} heures/jour`;

    // Recommandation
    let plantRecommendation = '';
    if (temp >= 20 && temp <= 30 && humid >= 50 && humid <= 70) {
      plantRecommendation = "Conditions idéales pour la plupart des plantes.";
    } else if (temp < 20) {
      plantRecommendation = "Température trop basse pour certaines plantes.";
    } else if (humid < 50) {
      plantRecommendation = "Besoin d'irrigation supplémentaire.";
    } else {
      plantRecommendation = "Conditions non optimales.";
    }
    recommendation.textContent = plantRecommendation;

    // Mettre à jour le graphique
    if (plantGrowthChart) {
      plantGrowthChart.destroy();
    }
    plantGrowthChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Température', 'Humidité', 'Ensoleillement'],
        datasets: [
          {
            label: 'Conditions actuelles',
            data: [temp, humid, 12 - sunlightHours],
            backgroundColor: 'rgba(86, 171, 47, 0.5)',
            borderColor: '#56ab2f',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  } catch (error) {
    alert(error.message);
  }
});
