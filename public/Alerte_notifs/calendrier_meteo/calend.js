// script.js
const notificationsContainer = document.getElementById("notifications");
const requestPermissionButton = document.getElementById("request-permission");

// Fonction pour afficher une notification dans la page
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerHTML = `
    <span>${message}</span>
    <span class="close" onclick="this.parentElement.remove()">✖</span>
  `;
  notificationsContainer.appendChild(notification);

  // Supprimer automatiquement après 5 secondes
  setTimeout(() => notification.remove(), 5000);
}

// Fonction pour envoyer une notification système
function sendSystemNotification(title, body) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png", // Icône météo
    });
  } else {
    showNotification("⚠️ Autorisez les notifications dans le navigateur !");
  }
}

// Vérifier la météo (exemple avec des données fictives)
function checkWeather() {
  // Exemple de données météo
  const weatherData = {
    city: "Paris",
    condition: "Pluie",
    temperature: 10,
  };

  // Créer une notification en fonction des conditions météo
  if (weatherData.condition === "Pluie") {
    showNotification(`🌧️ Il pleut actuellement à ${weatherData.city}.`);
    sendSystemNotification(
      "Alerte météo",
      `Il pleut à ${weatherData.city}. Température : ${weatherData.temperature}°C.`
    );
  } else {
    showNotification(`☀️ Temps clair à ${weatherData.city}.`);
  }
}

// Demander la permission pour les notifications système
function requestNotificationPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification("🎉 Notifications activées !");
      } else {
        showNotification("⚠️ Les notifications ont été refusées.");
      }
    });
  } else {
    showNotification("✅ Les notifications sont déjà activées.");
  }
}

// Activer les notifications au clic sur le bouton
requestPermissionButton.addEventListener("click", requestNotificationPermission);

// Simuler une vérification météo toutes les 30 secondes
setInterval(checkWeather, 30000);

// Vérification initiale
checkWeather();
