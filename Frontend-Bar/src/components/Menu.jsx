import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";
import SeccionCat from "./SeccionCategoria";
import BarraCateg from "./BarraCategorias";

// Componente principal para mostrar el menú con categorías y platos, 
// incluyendo lógica de filtrado y manejo de estados de carga y error
export default function Menu() {
  // Estados para manejar los platos, la carga y los errores
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para manejar la categoría activa en el filtro
  const [categoriaActiva, setcategoriaActiva] = useState("Todos");

  // Efecto para cargar los platos al montar el componente
  useEffect(() => {
    getPlatos()
      .then((data) => {
        setPlatos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // AGRUPAR POR CATEGORIA

  const agruparPorCategoria = (platos) => {
    return platos.reduce((acc, plato) => {
      const categoria = plato.categoria || "Otros";

      if (!acc[categoria]) {
        acc[categoria] = [];
      }

      acc[categoria].push(plato);
      return acc;
    }, {});
  };

  // Manejo de estados de carga y error
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-16 h-16 border-4 border-white/20 border-t-yellow-500 rounded-full animate-spin"></div>
        <p className="text-white text-lg font-serif">Cargando carta...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );
  }

  // DATOS
  const categoriasAgrupadas = agruparPorCategoria(platos);

  // navbar categories
  const categorias = ["Todos", ...Object.keys(categoriasAgrupadas)];

  // Filtrar platos según la categoría activa (si no es "Todos")

  const platosFiltrados =
    categoriaActiva === "Todos"
      ? platos
      : platos.filter((p) => p.categoria === categoriaActiva);

  const categoriasFiltradas = agruparPorCategoria(platosFiltrados);

  return (
    <div className="space-y-16 md:pt-14">

      {/* NAVBAR */}
      <BarraCateg
        categorias={categorias}
        categoriaActiva={categoriaActiva}
        setcategoriaActiva={setcategoriaActiva}
      />

      {/*  MENU  */}
      <div className="space-y-8 max-w-7xl mx-auto px-6">

        {Object.entries(categoriasFiltradas).map(
          ([categoria, platos]) => (
            <SeccionCat
              key={categoria}
              categoria={categoria}
              platos={platos}
            />
          )
        )}
    
      </div>
    </div>
  );
}
