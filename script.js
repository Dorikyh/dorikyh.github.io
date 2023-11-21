// Obtener el idioma del navegador del usuario
var userLang = navigator.language || navigator.userLanguage;

// Redirigir a la página correspondiente al idioma del navegador
if (userLang === 'es') {
  window.location.href = 'index_es.html';
} else if (userLang === 'fr') {
  window.location.href = 'index_fr.html';
}
