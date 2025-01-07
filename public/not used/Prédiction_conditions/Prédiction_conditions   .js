// script.js

// Exemple de données météo quotidiennes
const dailyWeather = [
    { date: "2025-01-10", condition: "Ensoleillé", temperature: 20, visibility: "Excellente" },
    { date: "2025-01-11", condition: "Nuageux", temperature: 15, visibility: "Bonne" },
    { date: "2025-01-12", condition: "Pluie", temperature: 10, visibility: "Moyenne" },
    { date: "2025-01-13", condition: "Ensoleillé", temperature: 18, visibility: "Bonne" },
    { date: "2025-01-14", condition: "Vent", temperature: 12, visibility: "Bonne" },
  ];
  
  // Récupérer le conteneur des prédictions photo
  const photoContainer = document.getElementById("photo-container");
  
  // Fonction pour déterminer les jours idéaux
  function isIdealForPhotography(weather) {
    return (
      (weather.condition === "Ensoleillé" || weather.condition === "Nuageux") &&
      weather.visibility === "Bonne" &&
      weather.temperature >= 10 &&
      weather.temperature <= 25
    );
  }
  
  // Fonction pour afficher les jours idéaux
  function displayPhotoPredictions(weatherData) {
    photoContainer.innerHTML = "";
  
    const idealDays = weatherData.filter(isIdealForPhotography);
  
    if (idealDays.length === 0) {
      photoContainer.innerHTML = `<p>Aucun jour idéal pour la photographie n'est prévu cette semaine.</p>`;
      return;
    }
  
    idealDays.forEach(weather => {
      const photoCard = document.createElement("div");
      photoCard.classList.add("photo-card");
  
      let advice;
      if (weather.condition === "Ensoleillé") {
        advice = "Idéal pour des paysages lumineux.";
      } else if (weather.condition === "Nuageux") {
        advice = "Lumière douce parfaite pour des portraits.";
      }
  
      photoCard.innerHTML = `
        <h3>${new Date(weather.date).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}</h3>
        <p>Condition : ${weather.condition}</p>
        <p>Température : ${weather.temperature}°C</p>
        <p>Visibilité : ${weather.visibility}</p>
        <p class="advice">${advice}</p>
      `;
  
      photoContainer.appendChild(photoCard);
    });
  }
  
  // Charger les prédictions photo au démarrage
  displayPhotoPredictions(dailyWeather);
  