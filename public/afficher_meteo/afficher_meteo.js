const weatherData = {
    current: {
      city: "Meknès, Fès-Meknès",
      updated: "il y a quelques minutes",
      temp: "4°C",
      condition: "Dégagé",
      wind: "11 km/h",
      humidity: "69%",
      icon: "moon-icon.png",
    },
    forecast: [
      { day: "sam. 4", high: "18°", low: "4°", icon: "moon-icon.png" },
      { day: "dim. 5", high: "19°", low: "9°", icon: "sun-icon.png" },
      { day: "lun. 6", high: "14°", low: "6°", icon: "rain-icon.png" },
      { day: "mar. 7", high: "18°", low: "5°", icon: "sun-icon.png" },
      { day: "mer. 8", high: "20°", low: "8°", icon: "sun-icon.png" },
    ],
  };
  

  const currentWeather = weatherData.current;
  document.querySelector(".current-weather h1").textContent = currentWeather.city;
  document.querySelector(".updated-time").textContent = `Mis à jour : ${currentWeather.updated}`;
  document.querySelector(".temp-icon .temp").textContent = currentWeather.temp;
  document.querySelector(".temp-icon img").src = currentWeather.icon;
  document.querySelector(".details").innerHTML = `
    <p>${currentWeather.condition}</p>
    <p>Vent : ${currentWeather.wind}</p>
    <p>Humidité : ${currentWeather.humidity}</p>
  `;
  
  
  const forecastContainer = document.querySelector(".forecast");
  weatherData.forecast.forEach(day => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerHTML = `
      <p>${day.day}</p>
      <img src="${day.icon}" alt="Icon météo">
      <p>${day.high} / ${day.low}</p>
    `;
    forecastContainer.appendChild(dayDiv);
  });
  