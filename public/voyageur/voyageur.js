document.addEventListener('DOMContentLoaded', function() {
    const travelButton = document.getElementById('travel-mode-btn');
    const car = document.getElementById('car');
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const descriptionElement = document.getElementById('description');
    const cityInput = document.getElementById('city-name');
    const searchButton = document.getElementById('search-city-btn');
  
    // Fonction pour obtenir la météo
    async function fetchWeather(city) {
      const apiKey = '377c082af98867a2d0f39b4f7b967327'; // Remplacez par votre clé API
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
          cityElement.innerText = `Ville: ${data.name}`;
          tempElement.innerText = `Température: ${data.main.temp}°C`;
          descriptionElement.innerText = `Description: ${data.weather[0].description}`;
        } else {
          alert("Ville non trouvée.");
        }
      } catch (error) {
        console.error(error);
        alert("Erreur de récupération des données météo.");
      }
    }
  
    // Initialiser avec la météo de Paris
    fetchWeather('Paris');
  
    // Mode Voyageur
    travelButton.addEventListener('click', function() {
      car.style.animation = 'drive 5s infinite linear'; // Lance l'animation de la voiture
      travelButton.disabled = true; // Désactive le bouton après activation
    });
  
    // Recherche de la météo pour une autre ville
    searchButton.addEventListener('click', function() {
      const city = cityInput.value.trim();
      if (city) {
        fetchWeather(city);  // Appeler la fonction pour récupérer la météo de la ville entrée
        cityInput.value = ''; // Réinitialiser le champ de saisie
      } else {
        alert('Veuillez entrer le nom d\'une ville.');
      }
    });
  });
  
  // Animation de la voiture
  document.styleSheets[0].insertRule(`
    @keyframes drive {
      0% {
        left: -150px;
      }
      100% {
        left: 100%;
      }
    }
  `, 0);
  