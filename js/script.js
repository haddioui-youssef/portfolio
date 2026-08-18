/* Menu hamburger + validation du formulaire de contact */

document.addEventListener('DOMContentLoaded', function () {

    // --- Menu hamburger (mobile) ---
    var menuToggle = document.getElementById('menuToggle');
    var mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fermer le menu en cliquant sur un lien
        var navLinks = mainNav.querySelectorAll('.nav-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function () {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        }
    }

    // --- Formulaire de contact ---
    var contactForm = document.getElementById('contactForm');
    var formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();

            // Réinitialiser le message
            formFeedback.className = 'form-feedback';

            // Vérifier que tous les champs sont remplis
            if (!name || !email || !message) {
                formFeedback.textContent = 'Veuillez remplir tous les champs obligatoires (*).';
                formFeedback.classList.add('error', 'visible');
                return;
            }

            // Vérifier le format de l'email
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                formFeedback.textContent = 'Veuillez saisir une adresse email valide.';
                formFeedback.classList.add('error', 'visible');
                return;
            }

            // Tout est correct
            formFeedback.textContent = 'Merci ' + name + ' ! Votre message a été validé avec succès.';
            formFeedback.classList.add('success', 'visible');
            contactForm.reset();
        });
    }

});
