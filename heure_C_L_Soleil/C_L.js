// script.js

document.getElementById('sunForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey =  "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        // Convertir les timestamps Unix en heure locale
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('fr-FR');
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('fr-FR');

        // Afficher les données
        document.getElementById('cityName').textContent = `Ville : ${data.name}`;
        document.getElementById('sunrise').textContent = `Lever du soleil : ${sunrise}`;
        document.getElementById('sunset').textContent = `Coucher du soleil : ${sunset}`;
        document.getElementById('result').classList.remove('hidden');
      } else {
        alert('Ville introuvable. Veuillez réessayer.');
      }
    })
    .catch((error) => {
      console.error('Erreur :', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
});
