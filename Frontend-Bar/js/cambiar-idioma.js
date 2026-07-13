// cambiar idioma de la página al hacer clic en el botón de idioma
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