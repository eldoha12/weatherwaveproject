document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = getPhoneNumber();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const dob = document.getElementById('dob').value;

    // Vérifier que l'email se termine bien par @weather.com
    if (!email.endsWith('@weather.com')) {
        alert('L\'email doit se terminer par @weather.com');
        return;
    }

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }

    // Vérifier que le numéro de téléphone est valide
    if (!iti.isValidNumber()) {
        alert('Veuillez entrer un numéro de téléphone valide');
        return;
    }

    // Vérifier que tous les champs sont remplis
    if (!name || !email || !phoneNumber || !password || !confirmPassword || !dob) {
        alert('Tous les champs sont obligatoires');
        return;
    }

    // Soumettre les données au serveur
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            phone: phoneNumber,
            password,
            dob
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Inscription réussie !');
            window.location.href = "/login"; // Redirection vers la page de connexion
        } else {
            response.text().then(errorMsg => alert(errorMsg));
        }
    })
    .catch(error => {
        console.error("Erreur lors de l'inscription:", error);
        alert('Une erreur est survenue lors de l\'inscription.');
    });
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = 'block';
  input.classList.add('error');
}
