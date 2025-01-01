const bcrypt = require('bcrypt');

const password = '123456'; // Entere ici Le mot de passe à hacher

bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Mot de passe haché:', hashedPassword);
});
