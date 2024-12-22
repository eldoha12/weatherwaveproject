// Liste des boissons et conditions
const beverages = [
    {
        condition: "Temps chaud (> 25°C)",
        suggestion: "Un smoothie aux fruits ou une limonade rafraîchissante !",
        beverageImage: "public/assets/smoothie.png",
        weatherImage: "public/assets/sunnymer.png",
    },
    {
        condition: "Temps agréable (15-25°C)",
        suggestion: "Un thé glacé ou un café frappé serait parfait.",
        beverageImage: "public/assets/iced-tea.png",
        weatherImage: "public/assets/agreable.png",
    },
    {
        condition: "Temps frais (5-15°C)",
        suggestion: "Un chocolat chaud ou un thé épicé serait idéal.",
        beverageImage: "public/assets/the-epice.png",
        weatherImage: "public/assets/cloudy.png",
    },
    {
        condition: "Temps froid (< 5°C)",
        suggestion: "Un vin chaud ou une soupe réconfortante pour se réchauffer.",
        beverageImage: "public/assets/hot-wine.png",
        weatherImage: "public/assets/snow.png",
    },
    {
        condition: "Temps ensoleillé",
        suggestion: "Un mojito ou une limonade glacée pour profiter du soleil !",
        beverageImage: "public/assets/mojito.png",
        weatherImage: "public/assets/sunny.png",
    },
    {
        condition: "Temps pluvieux",
        suggestion: "Un chocolat chaud pour ces jours pluvieux.",
        beverageImage: "public/assets/hot-chocolate.png",
        weatherImage: "public/assets/rainy.png",
    },
    {
        condition: "Temps neigeux",
        suggestion: "Une soupe chaude ou un chocolat chaud.",
        beverageImage: "public/assets/soupe.png",
        weatherImage: "public/assets/snowman.png",
    },
];

// Fonction pour afficher les suggestions
function displayBeverageSuggestions() {
    const beverageList = document.getElementById("beverage-list");

    beverages.forEach((beverage) => {
        const item = document.createElement("div");
        item.classList.add("beverage-item");

        item.innerHTML = `
            <img class="weather-image" src="${beverage.weatherImage}" alt="Image météo">
            <h3>${beverage.condition}</h3>
            <p>${beverage.suggestion}</p>
            <img class="beverage-image" src="${beverage.beverageImage}" alt="Image de boisson">
        `;

        beverageList.appendChild(item);
    });
}

// Charger les suggestions au démarrage
displayBeverageSuggestions();
