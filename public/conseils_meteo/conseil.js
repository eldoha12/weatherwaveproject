const apiKey = "VOTRE_API_KEY"; 
const weatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherDataDiv = document.getElementById("weatherData");
const adviceDiv = document.getElementById("advice");

weatherButton.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Veuillez entrer une ville !");
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
    if (!response.ok) throw new Error("Ville introuvable !");
    const data = await response.json();

    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    weatherDataDiv.innerHTML = `
      <h3>Météo à ${data.name}</h3>
      <p>Température : ${temperature}°C</p>
      <p>Condition : ${condition}</p>
    `;

    let advice = "Profitez de votre journée !";
    if (temperature < 10) {
      advice = "Il fait froid, pensez à vous couvrir !";
    } else if (temperature > 30) {
      advice = "Il fait chaud, restez hydraté et évitez le soleil direct !";
    }

    adviceDiv.textContent = advice;
  } catch (error) {
    weatherDataDiv.textContent = "Erreur : " + error.message;
    adviceDiv.textContent = "";
  }
});
