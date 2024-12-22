// Simulated weather data
const weatherData = {
    description: "ensoleillé",
    temperature: 25, // in °C
};

// Clothing suggestions grouped by category
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

// Function to display the weather
function displayWeather() {
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
}

// Function to display all clothing categories
function displayAllClothing() {
    const clothingItemsContainer = document.getElementById("clothing-items");
    clothingItemsContainer.innerHTML = ""; // Clear previous items

    // Add each category of clothing
    Object.entries(clothingSuggestions).forEach(([category, clothes]) => {
        // Add a category title
        const categoryTitle = document.createElement("h3");
        categoryTitle.innerText = getCategoryName(category);
        clothingItemsContainer.appendChild(categoryTitle);

        // Add clothing items
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("clothing-category");
        clothes.forEach((item) => {
            const clothingItem = document.createElement("div");
            clothingItem.classList.add("clothing-item");
            clothingItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            categoryContainer.appendChild(clothingItem);
        });

        clothingItemsContainer.appendChild(categoryContainer);
    });
}

// Helper function to get category name in French
function getCategoryName(category) {
    switch (category) {
        case "hot":
            return "Vêtements pour Temps Chaud";
        case "warm":
            return "Vêtements pour Temps Tempéré";
        case "cold":
            return "Vêtements pour Temps Froid";
        case "freezing":
            return "Vêtements pour Temps Glacial";
        default:
            return "Autres Vêtements";
    }
}

// Initialize the page
function init() {
    displayWeather();
    displayAllClothing();
}

init();
