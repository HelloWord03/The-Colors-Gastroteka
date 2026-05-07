import CartaPlato from "./PlatosCarta";

// Componente para mostrar una sección de categoría con sus platos
export default function SeccionCategoria({ categoria, platos }) {
  return (
    <section className="space-y-4 py-8">
      <div className=" text-center">
        <h3 className="text-3xl lg:text-5xl font-bold text-white font-serif">
          {categoria}
        </h3>
        <div className="w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></div>
      </div>

      {/* GRID DE PLATOS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {platos.map((plato) => (
          <CartaPlato key={plato.id || plato.nombre} plato={plato} />
        ))}
      </div>
    </section>
  );
}