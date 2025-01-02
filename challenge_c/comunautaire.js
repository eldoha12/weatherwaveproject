// Liste des défis communautaires
const challenges = [
    { id: 1, title: "Photo du coucher de soleil", description: "Capturez un magnifique coucher de soleil.", category: "photo" },
    { id: 2, title: "Rapport météo du jour", description: "Soumettez un rapport précis de la météo locale.", category: "report" },
    { id: 3, title: "Prédictions météo de la semaine", description: "Essayez de prédire la météo des prochains jours.", category: "forecast" },
    { id: 4, title: "Photo des nuages", description: "Prenez une photo artistique des formations nuageuses.", category: "photo" },
    { id: 5, title: "Analyse des précipitations", description: "Partagez une analyse des précipitations dans votre région.", category: "report" }
  ];
  
  // Fonction pour afficher les défis
  function displayChallenges(filter = "all") {
    const challengeList = document.querySelector(".challenge-list");
    challengeList.innerHTML = ""; // Réinitialiser le contenu
  
    const filteredChallenges = challenges.filter(challenge => filter === "all" || challenge.category === filter);
  
    filteredChallenges.forEach(challenge => {
      const card = document.createElement("div");
      card.className = "challenge-card";
      card.innerHTML = `
        <h3>${challenge.title}</h3>
        <p>${challenge.description}</p>
        <button onclick="participate(${challenge.id})">Participer</button>
      `;
      challengeList.appendChild(card);
    });
  }
  
  // Fonction appelée lors du clic sur un bouton "Participer"
  function participate(challengeId) {
    const challenge = challenges.find(ch => ch.id === challengeId);
    if (challenge) {
      alert(`Vous avez choisi de participer au défi : "${challenge.title}"`);
      // Vous pouvez ajouter ici d'autres actions, comme une redirection ou un enregistrement côté serveur
    }
  }
  
  // Écouter les changements de filtre
  document.querySelector("#category-select").addEventListener("change", (e) => {
    displayChallenges(e.target.value);
  });
  
  // Affichage initial
  displayChallenges();
  