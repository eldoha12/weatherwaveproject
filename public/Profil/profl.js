// Fonction pour afficher la photo sélectionnée
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('profile-img');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Fonction pour confirmer la suppression du compte
function confirmDelete() {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");
    if (confirmDelete) {
        // Envoi de la requête pour supprimer le compte côté serveur
        fetch('/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: document.getElementById('email').value }) // Exemple de body, tu peux personnaliser selon tes besoins
        })
        .then(response => {
            if (response.ok) {
                alert("Votre compte a été supprimé.");
                // Redirection après suppression
                window.location.href = "/login"; // Redirige vers la page de login ou page d'accueil après suppression
            } else {
                alert("Une erreur est survenue lors de la suppression de votre compte.");
            }
        })
        .catch(error => {
            console.error("Erreur de suppression du compte:", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        });
    }
}

// Fonction pour basculer entre le mode clair et sombre
function toggleTheme() {
    const theme = document.getElementById("theme").value;
    const body = document.getElementById("body");

    // Sauvegarder le thème choisi dans le localStorage
    localStorage.setItem('theme', theme);

    if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }
}

// Initialiser le thème basé sur la préférence stockée
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
        toggleTheme();
    } else {
        // Si aucun thème n'est stocké, on applique le mode clair par défaut
        document.getElementById('theme').value = 'light';
        toggleTheme();
    }
};
