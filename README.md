# **Projet WeatherWave** 🌦️  
## **Application Météo Intelligente et Interactive** ☀️🌧️

---

## **À propos du projet** 🌍

WeatherWave est une application météo réactive et esthétique, conçue pour offrir aux utilisateurs une expérience personnalisée, à jour et intuitive. En intégrant des données météorologiques précises, des recommandations adaptées et des fonctionnalités conviviales, WeatherWave vise à devenir votre compagnon météo idéal sur mobile et ordinateur.

---

## **Équipe de développement** 👩‍💻👨‍💻

- **Scrum Master** : Mr. OTHMAN MEKOUAR, DOHA EL FADILI  
- **Développeurs** : DOHA EL FADILI, ACHRAF ZEROUALI, HAYAT OUTALEB, HAMZA IDRISSI  

---

## **Fonctionnalités principales** ⚙️

### **Météo et Prévisions** 📅
1. **Météo actuelle** : Consultez la température, l'humidité, la vitesse du vent, et l'état du ciel (soleil, pluie, nuages, etc.).  
2. **Prévisions sur 7 jours** : Visualisez les tendances météorologiques pour la semaine à venir.  
3. **Recherche météo** : Trouvez des informations détaillées pour des villes spécifiques.  

### **Expérience utilisateur enrichie** 🌟
4. **Thème jour/nuit automatique** : L'application adapte son thème à l'heure de la journée.  
5. **Alertes météo** : Recevez des notifications pour des événements météorologiques importants.  
6. **Recommandations** : 
   ## 🧴 Suggestions en fonction de la météo

**Découvrez des recommandations personnalisées en fonction de la météo :**

- **🍹 Boissons** : Des idées de boissons adaptées (thé glacé pour les journées chaudes, chocolat chaud pour les temps froids, etc.).
- **👕 Vêtements** : Conseils vestimentaires selon la température (t-shirt léger, pull chaud, imperméable, etc.).
- **🎯 Activités** : Propositions d'activités à faire (pique-nique ensoleillé, lecture à la maison lors de jours pluvieux, etc.).

### **Interfaces utilisateur intuitives** 🖥️📱
7. **Authentification complète** : Interfaces pour connexion, inscription et réinitialisation de mot de passe.  
8. **Politiques et conditions** : Accès direct aux politiques de confidentialité et conditions générales.  
9. **Design adaptatif** : Interface optimisée pour tous les appareils (ordinateurs, tablettes, mobiles).  

---

## **Technologies utilisées** 💻

- **Frontend** : HTML, CSS, JavaScript  
- **Backend** : Node.js, Express, bcrypt, sessions  
- **API Météo** : Intégration d'une API météo fiable pour des données en temps réel.  
- **Responsive Design** : Adapté pour des résolutions d'écran variées via `@media queries`.  
- **Base de données (Backend)** : Utilisation de fichiers JSON pour stocker les utilisateurs et gérer les sessions.  
- **Sécurité** : Utilisation de bcrypt pour le cryptage des mots de passe des utilisateurs et gestion des sessions avec express-session.

---

## **Mise en route** 🚀

1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/elfadilid/weatherwaveproject.git

   ```

2. Accédez au répertoire du projet :
   ```bash
   cd weatherwaveproject
   ```

3. Pour l'interface frontend (HTML + JavaScript)
Ouvrez le fichier `public/index.html` dans votre navigateur pour visualiser l'application.

4. Pour le frontend et backend
Assurez-vous d'avoir installé **Node.js** et **npm**.

Installez les dépendances du backend :
   ```bash
   npm install express express-session body-parser bcrypt nodemon
   ```
Lancer le backend :
   ```bash
   node index.js
   ```
Le serveur sera accessible à http://localhost:4000.

## **Backend** 🖥️  
Le backend de WeatherWave utilise **Node.js** avec le framework **Express** pour gérer l'authentification des utilisateurs, la gestion des sessions et la mise à jour des profils utilisateurs.  

### **Fonctionnalités Backend** :  
- **Inscription d'un utilisateur** : Permet aux utilisateurs de créer un compte sécurisé avec un mot de passe crypté.  
- **Connexion des utilisateurs** : Authentifie les utilisateurs via leurs emails et mots de passe.  
- **Gestion du profil utilisateur** : Permet aux utilisateurs de consulter et mettre à jour leurs informations personnelles.  
- **Gestion des sessions** : Maintient les utilisateurs connectés via des sessions.  

## **Améliorations futures** 🔮
----------------------------

* Ajouter des alertes météo personnalisables selon les préférences des utilisateurs.
* Améliorer les animations pour une expérience plus immersive.
* Support multilingue pour une utilisation internationale.
* Analyser et visualiser les tendances météorologiques à long terme.

---

## **Contribution** 🤝
-------------------

Les contributions sont encouragées ! Forkez le projet, proposez des changements et soumettez une **Pull Request**.

---

### **Merci de découvrir WeatherWave !** 🌦️

WeatherWave, votre météo, votre style, votre compagnon quotidien. ☀️🌧️
