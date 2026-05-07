// Componente para mostrar cada plato del menú con su imagen, nombre, precio e ingredientes
export default function PlatosCarta({ plato }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col">

      {/* IMAGEN */}
      <div className="relative overflow-hidden">
        <img src={plato.imagen || "/img/sin-foto.png"}
          alt={plato.nombre}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300" />


        <span className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
          €{Number(plato.precio).toFixed(2)}
        </span>
      </div>

      {/* CONTENIDO */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          {plato.nombre}
        </h4>

        <p className="text-sm text-slate-600 flex-grow">
          {plato.ingredientes || "Preparado con ingredientes de calidad, dudas con el camarero"}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs uppercase text-slate-400">
            {plato.categoria}
          </span>
        </div>
      </div>
    </div>
  );
}