const weatherAlerts = [
    {
      type: "orage",
      message: "Orages violents attendus dans votre région. Restez vigilant."
    },
    {
      type: "canicule",
      message: "Alerte canicule : températures élevées prévues. Hydratez-vous."
    },
  ];

  function displayWeatherAlerts(alerts) {
    const alertContainer = document.getElementById("alert-container");
  
    alerts.forEach(alert => {
      const alertDiv = document.createElement("div");
      alertDiv.classList.add("weather-alert");
  
      alertDiv.innerHTML = `
        <div class="icon">
          <span>!</span>
        </div>
        <div class="content">
          <h1>Alerte Météo</h1>
          <p>${alert.message}</p>
        </div>
      `;
  
      alertContainer.appendChild(alertDiv);
    });
  }
  displayWeatherAlerts(weatherAlerts);
  