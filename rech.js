const form = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'VOTRE_CLÉ_API'; // Remplacez ceci par votre propre clé API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            weatherResult.innerHTML = `
                <h2>Météo pour ${data.name}, ${data.sys.country}</h2>
                <p><strong>Température :</strong> ${data.main.temp} °C</p>
                <p><strong>Description :</strong> ${data.weather[0].description}</p>
                <p><strong>Humidité :</strong> ${data.main.humidity} %</p>
                <p><strong>Vitesse du vent :</strong> ${data.wind.speed} m/s</p>
            `;
        } else {
            weatherResult.innerHTML = `<p>Ville introuvable. Essayez une autre ville.</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Erreur lors de la récupération des données. Essayez plus tard.</p>`;
    }
});