const windSpeedElement = document.getElementById('wind-speed');
const windArrow = document.getElementById('wind-arrow');
const simulateBtn = document.getElementById('simulate-btn');

simulateBtn.addEventListener('click', () => {
  // Générer une vitesse du vent aléatoire entre 10 et 100 km/h
  const windSpeed = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  // Afficher la vitesse dans l'interface
  windSpeedElement.textContent = windSpeed;

  // Modifier la vitesse de l'animation en fonction de la vitesse du vent
  const animationSpeed = 10 / windSpeed; // Vitesse inversement proportionnelle
  windArrow.style.animationDuration = `${animationSpeed}s`;
});
