// cambiar idioma de la página al hacer clic en el botón de idioma 
// no se asume que el usuario tenga instalado el traductor de Google, por lo que se carga dinámicamente el script de Google Translate
// Se asume que el botón de idioma tiene el id "cambiar-idioma" y 
// que hay un contenedor con id "google_translate_element" para mostrar el widget de traducción
document.getElementById("cambiar-idioma").addEventListener("click", function () {
  // Cargar el script de Google Translate si no está ya cargado
  if (!window.google || !window.google.translate) {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  } else {
    googleTranslateElementInit();
  }
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "es",
      includedLanguages: "es,en,fr,it,de,pt,zh-CN,ja,ko,ar,ru",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}