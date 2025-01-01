const bcrypt = require('bcrypt');

// Le mot de passe clair à comparer
const password = '123456';

// Le mot de passe haché (exemple)
const hashedPassword = '$2b$10$jn57g1IhMIfIocbU1To04uebw4DlQpBxOr5cWhYR/S9p3MtzAvjO'; // Exemple de hachage

// Comparer le mot de passe clair avec le haché
bcrypt.compare(password, hashedPassword, (err, result) => {
  if (err) throw err;
  if (result) {
    console.log('Le mot de passe est valide.');
  } else {
    console.log('Le mot de passe est invalide.');
  }
});
