// Horarios de apertura por día de la semana (0=Domingo, 1=Lunes, ..., 6=Sábado) null = cerrado
const horarios = {
  0: { open: "10:30", close: "22:30" }, // Domingo
  1: { open: "08:30", close: "22:30" }, // Lunes
  2: null,                              // Martes cerrado
  3: { open: "08:30", close: "22:30" }, //Miércoles
  4: { open: "08:30", close: "23:00" }, //Jueves
  5: { open: "08:30", close: "23:00" }, //Viernes
  6: { open: "10:30", close: "00:00" }  //Sábado
};

// Convierte "HH:MM" a minutos totales desde medianoche para facilitar comparaciones
function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

// Obtener hora actual del sistema y estado del bar (Abierto/Cerrado)
const now = new Date();
const day = now.getDay();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

const estadoEl = document.getElementById("estado");

if (!horarios[day]) {
  // Día es null => cerrado todo el día
  estadoEl.textContent = "🔴 Cerrado hoy, Lamentamos las molestias.";
} else {
  let { open, close } = horarios[day];

  let openM = toMinutes(open);
  let closeM = toMinutes(close);

  // caso especial: cierre para medianoche (00:00) fin del día = 1440 minutos
  if (close === "00:00") closeM = 24 * 60;

  // Si la hora actual es mayor o igual a la apertura y menor que el cierre, el bar está abierto en caso contrario está cerrado
  const abierto = currentMinutes >= openM && currentMinutes < closeM;

  estadoEl.textContent = abierto
    ? "🟢 Abierto ahora"
    : "🔴 Cerrado ahora";
}