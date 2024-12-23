document.addEventListener('DOMContentLoaded', () => {
    // Météo actuelle, peut être récupérée via une API
    const currentWeather = "sunny";  // Remplacez par un appel API réel pour obtenir la météo (ex. "sunny", "rainy", "cloudy", "snowy")

    // Supprimer la partie qui cache les cartes, car nous voulons afficher toutes les activités
    // const activityCards = document.querySelectorAll('.activity-card');
    // activityCards.forEach(card => {
    //     card.style.display = 'none';
    // });

    // Afficher toutes les cartes d'activités, car toutes doivent être visibles
    const allActivityCards = document.querySelectorAll('.activity-card');
    allActivityCards.forEach(card => {
        card.style.display = 'block';
    });
});
