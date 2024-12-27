const weatherData = {
    sunny: {
        icon: 'images/sunny.png',
        correctAnswer: 'sunny',
    },
    rainy: {
        icon: 'images/rainy.png',
        sound: 'sounds/rain.mp3',
        correctAnswer: 'rainy',
    },
    cloudy: {
        icon: 'images/cloudy.png',
        sound: 'sounds/cloudy.mp3',
        correctAnswer: 'cloudy',
    },
    snowy: {
        icon: 'images/snow.png',
        sound: 'sounds/snowy.mp3',
        correctAnswer: 'snowy',
    },
};

let currentWeather = '';

function nextQuestion() {
    const weatherKeys = Object.keys(weatherData);
    currentWeather = weatherKeys[Math.floor(Math.random() * weatherKeys.length)];
    
    document.getElementById('weather-icon').src = weatherData[currentWeather].icon;
    document.getElementById('result').textContent = '';

    // Play the sound associated with the weather
    const sound = new Audio(weatherData[currentWeather].sound);
    sound.play();
}

function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    
    if (answer === weatherData[currentWeather].correctAnswer) {
        resultElement.textContent = "Bravo ! C'est la bonne réponse !";
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = "Désolé, essaie encore !";
        resultElement.style.color = 'red';
    }
}

// Initial question
nextQuestion();
