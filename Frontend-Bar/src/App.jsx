import Menu from "./components/Menu";
import FormularioReserva from "./components/FormularioReserva";
import BarraNav from "./components/BarraNavegacion"

export default function App() {
  const esContacto = window.location.pathname.includes("contacto");

  // Renderizar el componente de navegación y mostrar el menú o el formulario de reserva según la ruta
  return (
    <main>
      <BarraNav/>
      {esContacto ? <FormularioReserva /> : <Menu />}
    </main>
  );
}