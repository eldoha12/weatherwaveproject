// Liste des prédictions fictives
const airQualityData = {
    paris: { aqi: 85, advice: "Modéré : Limitez les activités physiques prolongées en extérieur." },
    lyon: { aqi: 110, advice: "Mauvais : Évitez les activités extérieures prolongées." },
    marseille: { aqi: 70, advice: "Bon : Aucun risque pour la population." },
    bordeaux: { aqi: 95, advice: "Modéré : Certaines personnes sensibles peuvent ressentir des effets." },
    lille: { aqi: 120, advice: "Très Mauvais : Évitez toute activité physique en extérieur." },
  };
  
  // Fonction pour afficher les prédictions
  document.getElementById("get-predictions").addEventListener("click", () => {
    const city = document.getElementById("city-select").value;
    const prediction = airQualityData[city];
  
    if (prediction) {
      document.getElementById("aqi").textContent = prediction.aqi;
      document.getElementById("health-advice").textContent = prediction.advice;
    } else {
      document.getElementById("aqi").textContent = "-";
      document.getElementById("health-advice").textContent = "Aucune donnée disponible.";
    }
  });
  