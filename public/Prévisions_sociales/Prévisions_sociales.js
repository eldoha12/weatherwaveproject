const socialEvents = [
    {
      title: "Concert de musique classique",
      date: "2025-01-10",
      description: "Un concert exceptionnel avec les meilleurs musiciens de la région.",
    },
    {
      title: "Marché local",
      date: "2025-01-12",
      description: "Venez découvrir des produits frais et artisanaux au marché local.",
    },
    {
      title: "Conférence sur l'environnement",
      date: "2025-01-15",
      description: "Apprenez-en plus sur la préservation de notre planète lors de cette conférence.",
    },
    {
      title: "Fête des voisins",
      date: "2025-01-20",
      description: "Rencontrez vos voisins et partagez un moment convivial.",
    },
  ];
  
  
  const eventsContainer = document.getElementById("events-container");
  
  
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  }
  
  
  function displayEvents(events) {
    eventsContainer.innerHTML = ""; 
  
    
    if (events.length === 0) {
      eventsContainer.innerHTML = `<p>Aucun événement à venir.</p>`;
      return;
    }
  
    
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
  
      eventCard.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-date">${formatDate(event.date)}</div>
        <div class="event-description">${event.description}</div>
      `;
  
      eventsContainer.appendChild(eventCard);
    });
  }
  
  
  function loadSocialEvents() {
    
    setTimeout(() => {
      displayEvents(socialEvents);
    }, 1000); 
  }
  
  
  loadSocialEvents();
  