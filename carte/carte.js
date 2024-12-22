// Créer la carte avec Leaflet.js
var map = L.map('map').setView([48.8566, 2.3522], 12); // Coordonnées de Paris (lat, lon)

// Ajouter un fond de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fonction pour récupérer les données météo depuis l'API
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Format des données météo pour l'affichage
            var weatherInfo = `<b>${data.name}</b><br>Température: ${data.main.temp}°C<br>Conditions: ${data.weather[0].description}`;
            // Ajouter un marqueur avec les informations météo
            L.marker([lat, lon]).addTo(map)
                .bindPopup(weatherInfo)
                .openPopup();
        });
}

// Ajouter un événement au clic sur la carte pour afficher la météo
map.on('click', function(event) {
    var lat = event.latlng.lat;
    var lon = event.latlng.lng;
    getWeather(lat, lon);  // Appeler la fonction pour récupérer la météo
});
