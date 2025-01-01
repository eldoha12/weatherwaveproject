// Sélectionner les boutons
const quizButton = document.getElementById("quizButton");
const gameButton = document.getElementById("gameButton");
const kidsGameButton = document.getElementById("kidsGameButton");

// Ajouter des événements de clic aux boutons
quizButton.addEventListener("click", () => {
    alert("Bienvenue dans la section Quiz !");
});

gameButton.addEventListener("click", () => {
    alert("Bienvenue dans la section Jeux !");
});

kidsGameButton.addEventListener("click", () => {
    alert("Bienvenue dans la section Jeux d'enfants !");
});
