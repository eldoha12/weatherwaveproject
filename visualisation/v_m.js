// script.js

document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const city = document.getElementById('city').value;
    const apiKey = "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "200") {
          // Extraire les données pour les graphiques
          const labels = data.list.map((item) =>
            new Date(item.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'short', hour: '2-digit' })
          );
          const temps = data.list.map((item) => item.main.temp);
          const humidities = data.list.map((item) => item.main.humidity);
  
          // Afficher les graphiques
          document.getElementById('cityName').textContent = `Prévisions pour ${data.city.name}`;
          document.getElementById('charts').classList.remove('hidden');
          createChart('tempChart', labels, temps, 'Température (°C)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)');
          createChart('humidityChart', labels, humidities, 'Humidité (%)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)');
        } else {
          alert('Ville introuvable. Veuillez réessayer.');
        }
      })
      .catch((error) => {
        console.error('Erreur :', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  });
  
  function createChart(canvasId, labels, data, label, bgColor, borderColor) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: bgColor,
            borderColor: borderColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  