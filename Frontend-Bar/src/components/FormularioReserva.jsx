import { useState } from "react";

// Componente para el formulario de reserva que envía los datos por WhatsApp (con emojis para mejor formato)
export default function FormularioReserva() {
    // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    personas: "",
    hora: "",
    mensaje: "",
  });

  // Función para actualizar el estado del formulario al cambiar los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extraer los datos del formulario
    const { nombre, personas, hora, mensaje } = formData;

    // Validar campos
    if (!nombre.trim() || !personas.trim() || !hora.trim() || !mensaje.trim()) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const telefono = "688758342";

   const texto =
    `╔══════════════════ ∘◦❁◦∘ ═══════════════════╗
║                                 THE COLORS GASTROTEKA                                   ║
╠══════════════════════════════════════════╣
║                      RESERVA PENDIENTE DE CONFIRMACIÓN                    ║
╚══════════════════════════════════════════╝

    Nombre      : ${nombre}
    Personas    : ${personas}
    Hora        : ${hora}
    Detalles    : ${mensaje}

    ════════════════════ ∘◦❁◦∘ ═══════════════════

    Su solicitud ha sido recibida correctamente.

    La reserva está pendiente de confirmación.
    Nos pondremos en contacto con usted lo antes posible para
    confirmarla.

    ════════════════════ ∘◦❁◦∘ ═══════════════════`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    
    // Abrir WhatsApp con el mensaje prellenado
    window.open(url, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      personas: "",
      hora: "",
      mensaje: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-24 max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4"
    >
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div>
        <label htmlFor="personas" className="block text-sm font-medium text-gray-700 mb-1">
          Número de Personas
        </label>
        <input
          id="personas"
          type="number"
          name="personas"
          value={formData.personas}
          onChange={handleChange}
          placeholder="Número de personas"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div>
        <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-1">
          Hora de la Reserva
        </label>
        <input
          id="hora"
          type="time"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Detalles de la Reserva
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos los detalles de tu reserva..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
