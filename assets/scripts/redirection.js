const alertElement = document.getElementById("myAlert");
const allLinks = document.querySelectorAll('a');

const urlRD = Object.freeze({
  menu: {url: 'menu.html', msg: 'Redireccionando al menu principal.'}
});

function redirection(message, targetUrl) {
  alertElement.textContent = message;
  alertElement.style.display = 'block';
  setTimeout(function() {
    alertElement.style.display = 'none';
    window.location.replace(targetUrl);
  }, 1200);   
}

allLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    redirection(urlRD[link.id].msg, urlRD[link.id].url);
  });
});