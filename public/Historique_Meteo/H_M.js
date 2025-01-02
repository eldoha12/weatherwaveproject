// script.js

document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
  
    // Simuler les données météorologiques
    const weatherData = {
      paris: { temp: 15, condition: 'Ensoleillé' },
      lille: { temp: 12, condition: 'Nuageux' },
      lyon: { temp: 18, condition: 'Pluvieux' },
      marseille: { temp: 20, condition: 'Venté' },
    };
  
    // Ajouter les données au tableau
    const tableBody = document.getElementById('weatherData');
    tableBody.innerHTML = `
      <tr>
        <td>${date}</td>
        <td>${city.charAt(0).toUpperCase() + city.slice(1)}</td>
        <td>${weatherData[city].temp}</td>
        <td>${weatherData[city].condition}</td>
      </tr>
    `;
  });
  