const weatherData = {
  city: 'Paris',
  weather: ['sunny', 'rainy', 'cloudy', 'snowy'],
  descriptions: {
      sunny: "Il fait beau et ensoleillé aujourd'hui.",
      rainy: "Il pleut, prenez un parapluie !",
      cloudy: "Le ciel est nuageux.",
      snowy: "Il neige, il fait froid !"
  },
  icons: {
      sunny: 'https://img.icons8.com/ios/452/sun.png',
      rainy: 'https://img.icons8.com/ios/452/rain.png',
      cloudy: 'https://img.icons8.com/ios/452/cloud.png',
      snowy: 'https://img.icons8.com/ios/452/snow.png'
  }
};

let currentWeather = weatherData.weather[Math.floor(Math.random() * weatherData.weather.length)];

document.getElementById('weather-description').textContent = weatherData.descriptions[currentWeather];
document.getElementById('weather-icon').src = weatherData.icons[currentWeather];

function checkGuess() {
  const userGuess = document.getElementById('guess').value.toLowerCase();
  const resultElement = document.getElementById('result');
  
  if (userGuess === currentWeather) {
      resultElement.textContent = "Bravo, vous avez deviné correctement !";
      resultElement.style.color = 'green';
  } else {
      resultElement.textContent = `Désolé, la réponse correcte était ${currentWeather}. Essayez encore !`;
      resultElement.style.color = 'red';
  }
  
  // Reset for next round
  currentWeather = weatherData.weather[Math.floor(Math.random() * weatherData.weather.length)];
  document.getElementById('weather-description').textContent = weatherData.descriptions[currentWeather];
  document.getElementById('weather-icon').src = weatherData.icons[currentWeather];
  document.getElementById('guess').value = '';
}
