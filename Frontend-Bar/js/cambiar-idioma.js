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

menu.innerHTML = idiomas.map(idioma => `
    <li>
        <button class="idioma flex items-center gap-2 w-full px-4 py-2 hover:bg-red-600"
                data-lang="${idioma.codigo}">
            <img src="./img/flags/${idioma.codigo}.svg" class="w-5 h-5">
            ${idioma.nombre}
        </button>
    </li>
`).join("");

boton.onclick = () => menu.classList.toggle("hidden");

document.onclick = (e) => {
    if (!menu.contains(e.target) && !boton.contains(e.target))
        menu.classList.add("hidden");
};

menu.addEventListener("click", (e) => {

    const opcion = e.target.closest(".idioma");
    if (!opcion) return;

    const idioma = opcion.dataset.lang;

    bandera.src = `./img/flags/${idioma}.svg`;

    localStorage.setItem("idioma", idioma);

    menu.classList.add("hidden");

    // cambiarIdioma(idioma);
});

const idioma = localStorage.getItem("idioma") || "es";
bandera.src = `./img/flags/${idioma}.svg`;