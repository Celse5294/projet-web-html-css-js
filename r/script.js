// ================== VALIDATION DU FORMULAIRE DE CONTACT ==================
document.getElementById('formulaire-de-contact').addEventListener('submit', function(e) {
    var nom = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var nonValide = document.getElementById('form-error');
    var erreurEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    nonValide.textContent = "";

    // Vérification du champ Nom
    if (nom === "") {
        nonValide.textContent = "Le nom est obligatoire. S'il vous plaît, remplissez ce champ.";
        e.preventDefault();
        return;
    }

    // Vérification du champ Email
    if (!erreurEmail.test(email)) {
        nonValide.textContent = "Veuillez entrer un email valide.";
        e.preventDefault();
        return;
    }

    // Vérification du champ Message (minimum 10 caractères)
    if (message.length < 10) {
        nonValide.textContent = "Le message doit contenir au moins 10 caractères.";
        e.preventDefault();
        return;
    }

    // Confirmation si tout est valide
    alert("Merci pour votre message, " + nom + "!");
});
// ================== FIN VALIDATION FORMULAIRE ==================


// ================== CRÉATION DU BOUTON ENVOYER ==================
var boutonEnvoyer = document.createElement("button");
boutonEnvoyer.textContent = "Envoyer";
boutonEnvoyer.className = "bouton-envoyer";
document.querySelector(".formulaire-fieldset").appendChild(boutonEnvoyer);
// ================== FIN BOUTON ENVOYER ==================


// ================== CREATION DU BOUTON CHANGEMENT DE THÈME ==================
document.addEventListener("DOMContentLoaded", function() {
    var boutonTheme = document.createElement("button");
    boutonTheme.textContent = "Changer de thème";
    boutonTheme.id = "theme-toggle";

    // Style du bouton thème
    boutonTheme.style.marginLeft = "12px";
    boutonTheme.padding = "6px 12px";
    boutonTheme.style.cursor = "pointer";
    boutonTheme.style.borderRadius = "4px";
    boutonTheme.style.border = "none";
    boutonTheme.style.backgroundColor = "#2d5be3";
    boutonTheme.style.color = "#fff";
    boutonTheme.style.fontSize = "14px";
    boutonTheme.style.transition = "background-color 0.3s ease";
    boutonTheme.style.fontWeight = "bold";
    boutonTheme.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";

    // Ajout du bouton dans HERO
    var header = document.querySelector("header.hero nav ul");
    header.appendChild(boutonTheme);

    // Fonction de changement de thème
    boutonTheme.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            boutonTheme.textContent = "Changer de thème";
        } else {
            boutonTheme.textContent = "Changer de thème";
        }
    });
});
// ================== FIN BOUTON CHANGEMENT DE THÈME ==================


// ================== BOUTON RETOUR EN HAUT ==================
document.addEventListener("DOMContentLoaded", function() {
    var boutonRetour = document.createElement("button");
    boutonRetour.textContent = "Retour en haut";
    boutonRetour.id = "back-button";

    // Style du bouton retour
    boutonRetour.style.position = "fixed";
    boutonRetour.style.bottom = "24px";
    boutonRetour.style.right = "24px";
    boutonRetour.style.display = "none";
    boutonRetour.style.marginLeft = "12px";
    boutonRetour.style.padding = "6px 12px";
    boutonRetour.style.cursor = "pointer";
    boutonRetour.style.borderRadius = "4px";
    boutonRetour.style.border = "none";
    boutonRetour.style.backgroundColor = "#2d5be3";
    boutonRetour.style.color = "#fff";
    boutonRetour.style.fontSize = "14px";
    boutonRetour.style.transition = "background-color 0.3s ease";
    boutonRetour.style.fontWeight = "bold";
    boutonRetour.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";

    document.body.appendChild(boutonRetour); // Ajout du bouton dans le DOM

    // Affichage du bouton selon le scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            boutonRetour.style.display = "block";
        } else {
            boutonRetour.style.display = "none";
        }
    });

    // Retour en haut jusqu'à l'entête au clic
    boutonRetour.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
// ================== FIN BOUTON RETOUR EN HAUT ==================


// ================== BOUTON "COMMANDER"  Pour confirmer la commande d'un article==================
document.addEventListener("DOMContentLoaded", () => {
    const btnCommander = document.getElementById("btn-commander");
    btnCommander.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Merci pour votre commande ! Votre demande a été reçue et sera traitée sous peu !!!");
    });
});
// ================== FIN BOUTON COMMANDER ==================