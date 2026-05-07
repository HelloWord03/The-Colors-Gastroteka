// Obtener referencias a elementos del DOM que controlan el menú y el botón hamburguesa
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// abrir/cerrar con botón hamburguesa
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// cerrar al hacer clic en cualquier enlace del navbar (útil para móvil)
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});