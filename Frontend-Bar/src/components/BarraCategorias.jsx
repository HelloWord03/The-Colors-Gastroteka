import { useState } from "react";

// Barra de categorías con diseño responsive y menú desplegable en móvil
export default function BarraCategorias({
  categorias,
  categoriaActiva,
  setcategoriaActiva,
}) {
  // Estado para controlar el menú móvil (visible o no)
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar la selección de categoría en móvil
  const handleSelect = (cat) => {
    setcategoriaActiva(cat);
    setMenuOpen(false); // cerrar al seleccionar
  };

  return (

    <div className="sticky top-16 z-10 bg-black/90 backdrop-blur-md py-2 sm:max-w-sm sm:justify-self-start md:max-w-[100%] md:justify-self-auto">
    {/* CONTENEDOR PRINCIPAL */}

      {/* HEADER */}
      <div className="flex items-center justify-between px-4">

        <h3 className="text-4xl text-white font-semibold text-transparent bg-clip-text bg-gradient-to-r 
        from-red-500 via-white to-blue-500 font-serif md:hidden">Categorías</h3>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* DESKTOP */}  {/* SI ES LA CATEGORÍA ACTIVA, DESTACARLA */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 px-4 mt-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setcategoriaActiva(cat);
              setMenuOpen(false);
            }}
            className={`px-5 py-2 rounded-full text-base sm:text-sm font-medium transition ${categoriaActiva === cat
              ? "bg-yellow-500 text-black shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
          >
            {cat}
          </button> 
        ))}
      </div>

      {/* MÓVIL */} {/* SI ES LA CATEGORÍA ACTIVA, DESTACARLA */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 mt-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaActiva === cat
                ? "bg-yellow-500 text-black"
                : "bg-slate-100 text-slate-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}