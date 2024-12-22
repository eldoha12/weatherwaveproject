// Weather conditions with temperature range
const weatherConditions = [
    { description: "ensoleillé", temperature: 30 },
    { description: "pluie", temperature: 18 },
    { description: "neige", temperature: -2 },
    { description: "nuageux", temperature: 12 },
];

// Clothing suggestions for men and women
const clothingSuggestions = {
    hot: {
        men: [
            { name: "T-shirt", image: "public/assets/tshirt_men.png" },
            { name: "Short", image: "public/assets/shorts_men.png" },
            { name: "Casquette", image: "public/assets/hat_men.png" },
        ],
        women: [
            { name: "Top", image: "public/assets/top_women.png" },
            { name: "Short", image: "public/assets/shorts_women.png" },
            { name: "Sunglasses", image: "public/assets/sunglasses_women.png" },
        ],
    },
    warm: {
        men: [
            { name: "Chemise légère", image: "public/assets/shirt_men.png" },
            { name: "Jeans", image: "public/assets/jeans_men.png" },
        ],
        women: [
            { name: "Pull", image: "public/assets/blouse_women.png" },
            { name: "Jeans", image: "public/assets/jeans_women.png" },
        ],
    },
    cold: {
        men: [
            { name: "Pull", image: "public/assets/sweater_men.png" },
            { name: "Écharpe", image: "public/assets/scarf_men.png" },
            { name: "Bonnet", image: "public/assets/warmhat_men.png" },
        ],
        women: [
            { name: "Cardigan", image: "public/assets/cardigan_women.png" },
            { name: "Foulard", image: "public/assets/scarf_women.png" },
            { name: "Gants", image: "public/assets/gloves_women.png" },
        ],
    },
    freezing: {
        men: [
            { name: "Manteau", image: "public/assets/coat_men.png" },
            { name: "Gants", image: "public/assets/gloves_men.png" },
            { name: "Bottes", image: "public/assets/boots_men.png" },
        ],
        women: [
            { name: "Manteau en laine", image: "public/assets/wool_coat_women.png" },
            { name: "Bottes fourrées", image: "public/assets/fur_boots_women.png" },
            { name: "Mitaines", image: "public/assets/mittens_women.png" },
        ],
    },
};

// Function to display clothing based on gender and weather
function displayClothingForSelectedGender(gender) {
    const clothingItemsContainer = document.getElementById("clothing-items");
    clothingItemsContainer.innerHTML = ""; // Clear previous items

    weatherConditions.forEach(({ description, temperature }) => {
        let clothes = [];
        if (temperature > 25) {
            clothes = clothingSuggestions.hot[gender];
        } else if (temperature > 15) {
            clothes = clothingSuggestions.warm[gender];
        } else if (temperature > 5) {
            clothes = clothingSuggestions.cold[gender];
        } else {
            clothes = clothingSuggestions.freezing[gender];
        }

        // Add weather description and clothing suggestions
        const weatherBlock = document.createElement("div");
        weatherBlock.classList.add("weather-block");

        weatherBlock.innerHTML = `
            <h2>${description} à ${temperature}°C</h2>
            <div class="weather-image">
                <img src="public/assets/${description === 'ensoleillé' ? 'sunny' : description === 'pluie' ? 'rainy' : description === 'neige' ? 'snow' : 'cloudy'}.png" alt="${description}">
            </div>
        `;

        // Add clothing items
        const clothingItemsDiv = document.createElement("div");
        clothingItemsDiv.classList.add("clothing-items");
        clothes.forEach((item) => {
            const clothingItem = document.createElement("div");
            clothingItem.classList.add("clothing-item");
            clothingItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            clothingItemsDiv.appendChild(clothingItem);
        });

        weatherBlock.appendChild(clothingItemsDiv);
        clothingItemsContainer.appendChild(weatherBlock);
    });
}

// Event listeners for gender selection
document.getElementById("men-button").addEventListener("click", () => displayClothingForSelectedGender("men"));
document.getElementById("women-button").addEventListener("click", () => displayClothingForSelectedGender("women"));

// Default display for men on page load
displayClothingForSelectedGender("men");
