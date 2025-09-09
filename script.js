document.addEventListener('DOMContentLoaded', function() {
    // 1. Sélectionner le formulaire et le conteneur du message
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // 2. Écouter l'événement de soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        // 3. Récupérer les valeurs des champs
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // 4. Valider les champs
        if (nom === '') {
            alert('Veuillez saisir votre nom.');
            return; // Arrêter la fonction si la validation échoue
        }

        if (email === '' || !email.includes('@')) {
            alert('Veuillez saisir une adresse e-mail valide.');
            return;
        }

        if (message.length < 10) {
            alert('Le message doit contenir au moins 10 caractères.');
            return;
        }

        // 5. Si la validation est réussie, afficher un message de confirmation
        confirmationMessage.textContent = 'Merci ! Votre message a bien été envoyé.';
        confirmationMessage.style.color = 'green';
        confirmationMessage.style.marginTop = '15px';

        // 6. Réinitialiser le formulaire après l'envoi
        form.reset();
    });
});
// 1. Sélectionner le bouton et le corps du document
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Écouter le clic sur le bouton
themeToggle.addEventListener('click', function() {
    // 3. Basculer la classe 'dark-theme' sur le corps du document
    body.classList.toggle('dark-theme');

    // 4. Mettre à jour le texte du bouton (facultatif)
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Thème Clair';
    } else {
        themeToggle.textContent = 'Thème Sombre';
    }
});
// 1. Sélectionner le bouton
const backToTopBtn = document.getElementById('back-to-top');

// 2. Gérer l'affichage du bouton lors du défilement
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Le bouton apparaît après 300px de défilement
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 3. Gérer le clic sur le bouton pour remonter
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});