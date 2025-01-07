// Gestion des clics sur les boutons d'humeur
document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', function() {
        const mood = this.dataset.mood;
        const moodTitle = document.getElementById('selected-mood');
        const moodMessage = document.getElementById('mood-message');
        const suggestion = document.getElementById('suggestion');

        moodTitle.textContent = mood;

        // Messages selon l'humeur sélectionnée
        switch (mood) {
            case 'heureux':
                moodMessage.textContent = "Profitez de votre journée avec un bon café et un sourire ! 🌞";
                break;
            case 'triste':
                moodMessage.textContent = "Prenez un moment pour vous détendre et écouter de la musique apaisante. 🌧️";
                break;
            case 'stressé':
                moodMessage.textContent = "Respirez profondément et essayez une courte séance de méditation. 🧘";
                break;
            case 'calme':
                moodMessage.textContent = "C'est le moment parfait pour lire un livre ou écrire dans un journal. 📖";
                break;
            case 'énergique':
                moodMessage.textContent = "Allez faire une promenade ou dansez sur votre musique préférée ! 🎶";
                break;
            default:
                moodMessage.textContent = "";
        }

        suggestion.style.display = 'block';
    });
});
