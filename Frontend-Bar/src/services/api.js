// Archivo para manejar las llamadas a la API del backend y obtener los datos de los platos
export const getPlatos = async () => {
  const res = await fetch("https://the-colors-gastroteka.onrender.com");

  if (!res.ok) {
    throw new Error("Error fetching menu");
  }

  return res.json();
};