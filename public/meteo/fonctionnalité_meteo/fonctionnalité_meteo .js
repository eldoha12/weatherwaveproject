const socialEvents = [
    {
      title: "Concert en plein air",
      date: "2025-02-14",
      description: "Une soirée magique sous les étoiles avec des musiciens locaux.",
    },
    {
      title: "Festival de la gastronomie",
      date: "2025-03-20",
      description: "Découvrez des spécialités locales et des chefs talentueux.",
    },
    {
      title: "Marathon annuel",
      date: "2025-05-05",
      description: "Rejoignez-nous pour un marathon convivial dans la ville.",
    },
  ];
  
  const yearlyWeather = [
    { month: "Janvier", condition: "Neige", temperature: -3 },
    { month: "Février", condition: "Pluie", temperature: 2 },
    { month: "Mars", condition: "Nuageux", temperature: 8 },
    { month: "Avril", condition: "Ensoleillé", temperature: 15 },
  ];
  
  const eventsContainer = document.getElementById("events-container");
  const weatherContainer = document.getElementById("weather-container");

  function displayEvents(events) {
    eventsContainer.innerHTML = "";
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
      eventCard.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-date">${new Date(event.date).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</div>
        <div class="event-description">${event.description}</div>
      `;
      eventsContainer.appendChild(eventCard);
    });
  }

  function displayYearlyWeather(weatherData) {
    weatherContainer.innerHTML = "";
    weatherData.forEach(weather => {
      const weatherCard = document.createElement("div");
      weatherCard.className = "weather-card";
      weatherCard.innerHTML = `
        <h3>${weather.month}</h3>
        <p>Condition : ${weather.condition}</p>
        <p class="temperature">Température : ${weather.temperature}°C</p>
      `;
      weatherContainer.appendChild(weatherCard);
    });
  }

  displayEvents(socialEvents);
  displayYearlyWeather(yearlyWeather);
  