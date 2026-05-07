import { useState } from "react";

// Componente para la barra de navegación con diseño responsive y menú desplegable en móvil
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4 relative">

        {/* LOGO */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">
          The Colors Gastroteka
        </h1>

        {/* BOTÓN HAMBURGUESA */} {/* Visible solo en móvil */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENÚ */}
        <ul
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-black md:bg-transparent
            flex flex-col md:flex-row
            gap-4 md:gap-6
            text-xl sm:text-2xl lg:text-4xl
            font-medium
            p-4 md:p-0
            transition-all duration-300
            ${open ? "block" : "hidden md:flex"}
          `}
        >
          <li>
            <a href="../index.html#about" className="text-white hover:text-red-500">
              Sobre Nosotros
            </a>
          </li>

          <li>
            <a href="./menu.html" className="text-white hover:text-red-500">
              Menú
            </a>
          </li>

          <li>
            <a href="./contacto.html" className="text-white hover:text-red-500">
              Contacto
            </a>
          </li>

          <li>
            <a href="../index.html#information" className="text-white hover:text-red-500">
              Información
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}