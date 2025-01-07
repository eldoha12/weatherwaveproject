const API_KEY = 'e5b3fa5c6210d1bb344d424f22015c95'; // Remplacez par votre clé API (par exemple, d'une API de pollen)

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const allergyRisk = document.getElementById('allergy-risk');
const pollenType = document.getElementById('pollen-type');
const ctx = document.getElementById('allergy-chart').getContext('2d');

let allergyChart;

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Veuillez entrer une ville.');
    return;
  }

  try {
    // Exemple de requête API pour récupérer les données de pollen
    const response = await fetch(
      `https://api.example.com/pollen?city=${city}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Ville introuvable ou données indisponibles.');
    }

    const data = await response.json();

    // Traitement des données récupérées
    const risk = data.allergyRisk; // Pourcentage de risque
    const dominantPollen = data.pollenType; // Type de pollen dominant
    const pollenLevels = data.pollenLevels; // Données pour le graphique

    // Mettre à jour l'interface utilisateur
    cityName.textContent = `Ville : ${city}`;
    allergyRisk.textContent = `${risk}%`;
    pollenType.textContent = dominantPollen;

    // Mettre à jour le graphique
    if (allergyChart) {
      allergyChart.destroy();
    }
    allergyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Arbres', 'Herbes', 'Ambroisie'],
        datasets: [
          {
            label: 'Niveau de Pollen',
            data: pollenLevels, // Exemple : [50, 30, 20]
            backgroundColor: ['#ff6f61', '#ffa726', '#ffcc80'],
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
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    alert(error.message);
  }
});
