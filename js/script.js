document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_zjseagw", "template_rmdba6i", this)
        .then(() => {
            document.getElementById("form-status").innerText = "✅ Message envoyé avec succès !";
            document.getElementById("form-status").style.color = "limegreen";
            this.reset();
        }, (error) => {
            document.getElementById("form-status").innerText = "❌ Erreur lors de l'envoi. Réessayez plus tard.";
            document.getElementById("form-status").style.color = "red";
            console.error("Erreur EmailJS:", error);
        });
});

// Bouton retour en haut
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) { // apparaît après 400px de scroll
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});