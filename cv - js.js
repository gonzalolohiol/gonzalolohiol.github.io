function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombre === '' || correo === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }
    
    window.location.reload();
    return true;
  }

 function smoothScroll(target, duration) {
    const targetElement = document.getElementById(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

   
function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId, 1000); 
    });
})

 function compartirFacebook() {
    const url = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    abrirVentanaPopup(facebookUrl);
}

function compartirTwitter() {
    const url = encodeURIComponent(window.location.href);
    const titulo = encodeURIComponent("¡Echa un vistazo a mi CV!");
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${titulo}`;
    abrirVentanaPopup(twitterUrl);
}

function compartirLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${url}`;
    abrirVentanaPopup(linkedinUrl);
}

function abrirVentanaPopup(url) {
    window.open(url, 'Compartir en redes sociales', 'width=600,height=400');
}