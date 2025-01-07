document.getElementById('get-uv-alert').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    const apiKey =  "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API valide
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        alert('Veuillez entrer une ville.');
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const uvIndex = Math.random() * 11; // Remplacez avec une vraie API UV si disponible
                const cityName = data.name;
                const advice = getUVAdvice(uvIndex);

                document.getElementById('city-name').innerText = `Ville : ${cityName}`;
                document.getElementById('uv-index').innerText = `Indice UV : ${uvIndex.toFixed(2)}`;
                document.getElementById('uv-advice').innerText = advice;
                document.getElementById('uv-result').classList.remove('hidden');
            } else {
                alert('Ville introuvable. Veuillez réessayer.');
            }
        })
        .catch(error => console.error('Erreur:', error));
});

function getUVAdvice(uvIndex) {
    if (uvIndex < 3) return 'Indice faible : Aucun danger, profitez !';
    if (uvIndex < 6) return 'Indice modéré : Portez des lunettes et un chapeau.';
    if (uvIndex < 8) return 'Indice élevé : Utilisez de la crème solaire (SPF 30+).';
    if (uvIndex < 11) return 'Indice très élevé : Évitez le soleil de midi.';
    return 'Indice extrême : Restez à l\'intérieur si possible.';
}
