const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const PORT = 4000;

// Middleware pour lire les JSON dans les requêtes
app.use(bodyParser.json());

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

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Choisis le service que tu veux utiliser
  auth: {
    user: 'tonemail@gmail.com', // Ton email
    pass: 'tonmotdepasse' // Ton mot de passe ou mot de passe d'application
  }
});

// Route pour envoyer un lien de réinitialisation
app.post('/reset-password', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'L\'email est requis.' });
  }

  const users = getUsers();
  const user = users.find((user) => user.email === email);
  
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  }

  // Générer un token pour la réinitialisation
  const token = crypto.randomBytes(20).toString('hex');
  const resetLink = `http://localhost:4000/reset-password/${token}`;

  // Envoyer un email avec le lien
  const mailOptions = {
    from: 'tonemail@gmail.com',
    to: email,
    subject: 'Réinitialisation de votre mot de passe',
    text: `Cliquez sur ce lien pour réinitialiser votre mot de passe : ${resetLink}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Erreur d\'envoi de l\'email.' });
    }
    res.status(200).json({ message: 'L\'email de réinitialisation a été envoyé.' });
  });
});

// Route pour réinitialiser le mot de passe
app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).json({ message: 'Le nouveau mot de passe est requis.' });
  }

  const users = getUsers();
  const user = users.find((user) => user.resetToken === token);

  if (!user) {
    return res.status(404).json({ message: 'Token invalide ou expiré.' });
  }

  // Hacher le nouveau mot de passe
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.resetToken = undefined; // Supprimer le token après réinitialisation

  saveUsers(users);
  res.status(200).json({ message: 'Mot de passe réinitialisé avec succès.' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
