// Obtener el idioma del navegador del usuario y convertirlo a minúsculas para la comparación
var userLang = (navigator.language || navigator.userLanguage).toLowerCase();

// Verificar si el idioma contiene subcadenas específicas
if (userLang.includes('es')) {
  window.location.href = 'index_es.html'; // Redirigir a la página en español
} else if (userLang.includes('fr')) {
  window.location.href = 'index_fr.html'; // Redirigir a la página en francés
} else if (userLang.includes('en')) {
  window.location.href = 'index_en.html'; // Redirigir a la página en inglés
} else {
  // Redirigir a una página predeterminada en caso de no coincidir con los idiomas deseados
  window.location.href = 'index.html';
}
