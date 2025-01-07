// script.js
document.getElementById('formulaireVilles').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const ville1 = document.getElementById('ville1').value.trim();
    const ville2 = document.getElementById('ville2').value.trim();
  
    if (!ville1 || !ville2) {
      alert('Veuillez entrer deux villes valides.');
      return;
    }
  
    try {
      const apiKey =  "d5922e4d4b67242e4c7dd35c130a49f8"; // Remplacez par votre clé API
      const [dataVille1, dataVille2] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville1}&units=metric&lang=fr&appid=${apiKey}`).then(res => res.json()),
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville2}&units=metric&lang=fr&appid=${apiKey}`).then(res => res.json())
      ]);
  
      if (dataVille1.cod !== 200 || dataVille2.cod !== 200) {
        alert('Une ou plusieurs villes sont introuvables. Veuillez vérifier les noms.');
        return;
      }
  
      document.getElementById('meteo1').textContent = dataVille1.weather[0].description;
      document.getElementById('temp1').textContent = `${dataVille1.main.temp}°C`;
      document.getElementById('hum1').textContent = `${dataVille1.main.humidity}%`;
  
      document.getElementById('meteo2').textContent = dataVille2.weather[0].description;
      document.getElementById('temp2').textContent = `${dataVille2.main.temp}°C`;
      document.getElementById('hum2').textContent = `${dataVille2.main.humidity}%`;
  
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error);
      alert('Une erreur est survenue lors de la récupération des données.');
    }
  });
  