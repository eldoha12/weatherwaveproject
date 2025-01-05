const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000; // Changer le port à 4000 si c'est celui que tu veux utiliser

// Middleware pour lire les JSON dans les requêtes
app.use(bodyParser.json());

// Middleware pour servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Fichier JSON pour stocker les comptes utilisateurs
const USERS_FILE = 'users.json';

// Fonction utilitaire pour lire et écrire dans le fichier JSON
const getUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
};

const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Route pour enregistrer un utilisateur
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe sont obligatoires.' });
  }

  const users = getUsers();

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ email, password: hashedPassword });
  saveUsers(users);

  res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
});

// Route pour connecter un utilisateur
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe sont obligatoires.' });
  }

  const users = getUsers();

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Mot de passe incorrect.' });
  }

  res.status(200).json({ message: 'Connexion réussie.' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
