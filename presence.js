fetch('https://api.lanyard.rest/v1/users/841368898146402355')
.then(response => response.json())
.then(data => {
  // Manipular los datos obtenidos y mostrar la presencia de Discord
  const discordPresence = document.getElementById('discord-presence');

  if (data.success) {

    const status = data.data.discord_status;

    var userLang = (navigator.language || navigator.userLanguage).toLowerCase();

    // Verificar si el idioma contiene subcadenas específicas
    if (userLang.includes('es')) {
        discordPresence.innerHTML = `
        <p>Estado: ${status}</p>
      `;
    } else {
        discordPresence.innerHTML = `
        <p>Status: ${status}</p>
      `;
    }
  }
})
