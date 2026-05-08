import { useState } from "react";

// Componente para el formulario de reserva que envía los datos por WhatsApp (con emojis para mejor formato)
export default function FormularioReserva() {
    // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
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
    const { nombre, email, mensaje } = formData;

    // Validar campos
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const telefono = "688758342";

    const emoji = {
      plato:   String.fromCodePoint(\uD83C\uDF7D\uFE0F),    // 🍽️
      persona: String.fromCodePoint(0x1F464),               // 👤
      email:   String.fromCodePoint(0x1F4E7),               // 📧
      nota:    String.fromCodePoint(0x1F4DD),               // 📝
    };

    // Códigos de emojis para evitar problemas de encoding UTF-8
    const texto =       
      `==================================================\n` +
      `${emoji.plato} Reserva The Colors Gastroteka\n\n` +
      `${emoji.persona} Nombre: ${nombre}\n` +
      `${emoji.email} Email: ${email}\n` +
      `${emoji.nota} Detalles: ${mensaje}\n` +
      `==================================================`;

    console.log(texto);
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    // Abrir WhatsApp con el mensaje prellenado
    window.open(url, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
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

        <div className="text-xs text-gray-500 whitespace-pre-wrap break-all">
  {`\u{1F37D}\u{FE0F} prueba de emoji`}
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
