document.querySelectorAll('.faq-question').forEach((questionButton) => {
    questionButton.addEventListener('click', () => {
      const answer = questionButton.nextElementSibling;
      
      // Toggle l'affichage de la réponse
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Gérer l'envoi du formulaire de message
  const form = document.getElementById('message-form');
  const responseMessage = document.getElementById('response-message');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    const name = document.getElementById('user-name').value;
    const message = document.getElementById('user-message').value;
  
    // Logique pour envoyer le message (par exemple, via une API ou en l'affichant)
    console.log('Message envoyé : ', { name, message });
  
    // Afficher une réponse de confirmation
    responseMessage.textContent = `Merci, ${name}! Votre message a été envoyé. Nous vous répondrons bientôt.`;
  
    // Réinitialiser le formulaire
    form.reset();
  });
  