const apiKey = "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API

document.getElementById("search-btn").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Veuillez entrer le nom d'une ville.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;

  console.log("URL de l'API : ", url); // Vérifie l'URL générée

  try {
    const response = await fetch(url);
    console.log("Réponse de l'API : ", response); // Vérifie si la réponse est correcte
    if (!response.ok) {
      throw new Error("Ville introuvable.");
    }
    const data = await response.json();
    console.log("Données météo : ", data); // Vérifie les données récupérées

    // Mise à jour de l'interface utilisateur
    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-description").textContent = data.weather[0].description;
    document.getElementById("weather-result").classList.remove("hidden");

  } catch (error) {
    console.error("Erreur de récupération des données météo : ", error);
    alert(error.message);
  }
});
