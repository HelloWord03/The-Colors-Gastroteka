const idiomas = [
    { codigo: "es", nombre: "Español" },
    { codigo: "en", nombre: "English" },
    { codigo: "fr", nombre: "Français" },
    { codigo: "de", nombre: "Deutsch" },
    { codigo: "it", nombre: "Italiano" },
    { codigo: "pt", nombre: "Português" }
];

const boton = document.getElementById("selector-idioma");
const menu = document.getElementById("menu-idiomas");
const bandera = document.getElementById("bandera-actual");

document.querySelectorAll("#es-link, #en-link, #fr-link").forEach(boton => {
    boton.addEventListener("click", () => {
        document.getElementById("fab-toggle-idioma").checked = false;
    });
});