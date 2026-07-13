// cambiar idioma de la página al hacer clic en el botón de idioma
const botonIdioma = document.getElementById("cambiar-idioma");
const idiomaActual = localStorage.getItem("idioma") || "es"; // idioma por defecto es español

// Función para cambiar el idioma   
function cambiarIdioma() {
  const nuevoIdioma = idiomaActual === "es" ? "en" : "es";  
    localStorage.setItem("idioma", nuevoIdioma);
}