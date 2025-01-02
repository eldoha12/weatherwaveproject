const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

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
app.post('/signup', async (req, res) => {
  const { name, email, phone, password, dob } = req.body;
  const dateOfBirth = dob; // Conversion du champ 'dob' en 'dateOfBirth'

  if (!name || !email || !phone || !password || !dateOfBirth) {
    console.error('Champs manquants');
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  const users = getUsers();
  console.log('Utilisateurs existants :', users);

  if (users.find((user) => user.email === email)) {
    console.error('Email déjà utilisé');
    return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ email, password: hashedPassword, phone, name, dateOfBirth });
    console.log('Nouvel utilisateur ajouté :', { email, phone, name, dateOfBirth });

    saveUsers(users);

    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (err) {
    console.error('Erreur lors du hachage du mot de passe :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
  }
});

// Route pour connecter un utilisateur
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Requête de connexion reçue :', req.body);

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

// Route pour afficher la page d'accueil (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour afficher la page de connexion (login.html)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'interface/app.html')); // Assurez-vous que ce fichier existe dans 'public'
});

// Route pour mettre à jour le profil de l'utilisateur
app.post('/update-profile', async (req, res) => {
  const { email, name, phone, dateOfBirth } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email est requis.' });
  }

  const users = getUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  }

  user.name = name || user.name;
  user.phone = phone || user.phone;
  user.dateOfBirth = dateOfBirth || user.dateOfBirth;

  saveUsers(users);

  res.status(200).json({ message: 'Profil mis à jour avec succès.' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
