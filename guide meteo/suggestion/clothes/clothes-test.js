// Simulated weather data
const weatherData = {
    description: "ensoleillé",
    temperature: 25, // in °C
};

// Clothing suggestions
const clothingSuggestions = {
    hot: [
        { name: "T-shirt", image: "public/assets/tshirt.png" },
        { name: "Short", image: "public/assets/shorts.png" },
        { name: "Casquette", image: "public/assets/hat.png" },
    ],
    warm: [
        { name: "Chemise légère", image: "public/assets/shirt.png" },
        { name: "Jeans", image: "public/assets/jeans.png" },
    ],
    cold: [
        { name: "Pull", image: "public/assets/sweater.png" },
        { name: "Écharpe", image: "public/assets/scarf.png" },
        { name: "Bonnet", image: "public/assets/hat.png" },
    ],
    freezing: [
        { name: "Manteau", image: "public/assets/coat.png" },
        { name: "Gants", image: "public/assets/gloves.png" },
        { name: "Bottes", image: "public/assets/boots.png" },
    ],
};

// Function to display the weather and suggestions
function displayWeatherAndClothes() {
    const { description, temperature } = weatherData;

    // Update weather information
    document.getElementById("weather-condition").innerText = `${description} à ${temperature}°C`;
    const weatherImage = document.getElementById("weather-image");
    if (description.includes("ensoleillé")) {
        weatherImage.src = "public/assets/sunny.png";
    } else if (description.includes("pluie")) {
        weatherImage.src = "public/assets/rainy.png";
    } else if (description.includes("neige")) {
        weatherImage.src = "public/assets/snow.png";
    } else {
        weatherImage.src = "public/assets/cloudy.png";
    }

    // Determine the clothing suggestions based on temperature
    let clothes = [];
    if (temperature > 25) {
        clothes = clothingSuggestions.hot;
    } else if (temperature > 15) {
        clothes = clothingSuggestions.warm;
    } else if (temperature > 5) {
        clothes = clothingSuggestions.cold;
    } else {
        clothes = clothingSuggestions.freezing;
    }

    // Display the clothing suggestions
    const clothingItemsContainer = document.getElementById("clothing-items");
    clothingItemsContainer.innerHTML = ""; // Clear previous items
    clothes.forEach((item) => {
        const clothingItem = document.createElement("div");
        clothingItem.classList.add("clothing-item");
        clothingItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        clothingItemsContainer.appendChild(clothingItem);
    });
}

// Initialize
displayWeatherAndClothes();
