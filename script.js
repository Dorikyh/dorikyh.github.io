// Obtener el idioma del navegador del usuario y convertirlo a minúsculas para la comparación
var userLang = (navigator.language || navigator.userLanguage).toLowerCase();

// Verificar si el idioma contiene subcadenas específicas
if (userLang.includes('es')) {
  window.location.href = 'es'; // Redirigir a la página en español
} else {
  // Redirigir a una página predeterminada en caso de no coincidir con los idiomas deseados
  window.location.href = 'en';
}
