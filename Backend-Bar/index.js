const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());              // Permite peticiones desde otros orígenes (el frontend)
app.use(express.json());      // Permite leer el body de las peticiones en formato JSON

// Conexión a la base de datos (la crea si no existe)
const db = new sqlite3.Database('./database.db');

// --------Inicialización de la base de datos----------
// Crear tabla y poblarla con datos iniciales si está vacía 
// (esto se ejecuta cada vez que arranca el servidor, pero solo inserta si no hay datos)
db.serialize(() => {

  // Crear tabla platos si no existe
  db.run(`
    CREATE TABLE IF NOT EXISTS platos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      categoria TEXT,
      precio REAL,
      ingredientes TEXT,
      imagen TEXT
    )
  `);

  // Datos iniciales para la carta agrupados por categoría (esto se puede modificar o ampliar según el menú real del bar)
  const platosIniciales = [
    // PARA COMPARTIR
    { nombre: "Croquetas de la casa", categoria: "Para compartir", precio: 12.00, ingredientes: "", imagen: "/img/croquetas.jpg" },
    { nombre: "Tiras de pollo crujientes con ali-oli", categoria: "Para compartir", precio: 12.00, ingredientes: "", imagen: "/img/tiras-pollo.jpg" },
    { nombre: "Tequeños con salsa de frutos rojos (6U)", categoria: "Para compartir", precio: 8.00, ingredientes: "", imagen: "/img/tequeños.jpg" },
    { nombre: "Patatas bravuconas", categoria: "Para compartir", precio: 12.00, ingredientes: "", imagen: "" },
    { nombre: "Paleta ibérica", categoria: "Para compartir", precio: 20.00, ingredientes: "", imagen: "/img/paleta.jpg" },

    // HUEVOS ROTOS
    { nombre: "Huevos rotos con paleta ibérica", categoria: "Huevos rotos", precio: 10.50, ingredientes: "", imagen: "/img/huevos-paleta.jpeg" },
    { nombre: "Huevos rotos con morcilla y pisto", categoria: "Huevos rotos", precio: 10.50, ingredientes: "", imagen: "/img/huevos-morcilla.jpeg" },
    { nombre: "Huevos rotos con foie y hongos", categoria: "Huevos rotos", precio: 12.50, ingredientes: "", imagen: "/img/huevos-foie.jpg" },

    // RACIONES
    { nombre: "Oreja crujiente a la plancha", categoria: "Raciones", precio: 12.00, ingredientes: "", imagen: "/img/oreja.jpeg" },
    { nombre: "Costilla de cerdo con BBQ", categoria: "Raciones", precio: 17.00, ingredientes: "", imagen: "/img/costilla.jpg" },
    { nombre: "Pulpo a la plancha", categoria: "Raciones", precio: 20.00, ingredientes: "", imagen: "/img/pulpo.jpeg" },

    // BURGERS
    { nombre: "Burger clásica", categoria: "Burgers", precio: 12.95, ingredientes: "lechuga, tomate, carne, huevo, queso gouda, bacon, salsa BBQ", imagen: "" },
    { nombre: "Burger de foie y hongos", categoria: "Burgers", precio: 14.95, ingredientes: "lechuga, tomate, carne, foie, crema de hongos", imagen: "/img/hamb-foie.jpg" },
    { nombre: "Burger Diávola", categoria: "Burgers", precio: 14.50, ingredientes: "lechuga, tomate, carne, cebolla, jalapeños, queso crema, chipotle", imagen: "" },
    { nombre: "Burger ibérica", categoria: "Burgers", precio: 14.50, ingredientes: "lechuga, tomate, carne, huevo, queso manchego, jamón ibérico", imagen: "/img/hamb-iberica.jpeg" },
    { nombre: "Burger de pollo", categoria: "Burgers", precio: 11.50, ingredientes: "lechuga, tomate, pollo crujiente, queso gouda, ali-oli, alcaparras, pepinillo", imagen: "/img/hamb-pollo.jpeg" },

    // ENSALADAS
    { nombre: "Carpaccio de tomate, pesto y parmesano", categoria: "Ensaladas", precio: 10.50, ingredientes: "tomate, pesto, parmesano", imagen: "/img/carpaccio.jpg" },
    { nombre: "Tacos de tomate con bonito", categoria: "Ensaladas", precio: 16.50, ingredientes: "tomate, bonito, cebolleta", imagen: "/img/tacos.jpg" },

    // OTROS
    { nombre: "Pan", categoria: "Otros", precio: 1.50, ingredientes: "harina", imagen: "/img/pan.jpg" },

    // POSTRES
    { nombre: "Postres de la casa", categoria: "Postres", precio: 6.50, ingredientes: "", imagen: "" },
    { nombre: "Valenciano", categoria: "Postres", precio: 6.50, ingredientes: "helado vainilla, zumo naranja, licor", imagen: "" },

    // CAFÉS ESPECIALES (precio medio porque varía)
    { nombre: "Affogato Frangelico", categoria: "Cafés especiales", precio: 6.50, ingredientes: "helado vainilla, licor Frangelico, café, chocolate", imagen: "/img/afogato-fran.jpg" },
    { nombre: "Affogato Tiramisú", categoria: "Cafés especiales", precio: 6.50, ingredientes: "helado mascarpone, Amaretto, café, cacao", imagen: "" },
    { nombre: "Café irlandés", categoria: "Cafés especiales", precio: 5.50, ingredientes: "café, whisky, nata", imagen: "" },
    { nombre: "Café jamaicano", categoria: "Cafés especiales", precio: 6.00, ingredientes: "café, ron, nata", imagen: "" },
    { nombre: "Café escocés", categoria: "Cafés especiales", precio: 6.50, ingredientes: "café, whisky escocés, nata", imagen: "" },
    { nombre: "Café caribeño", categoria: "Cafés especiales", precio: 6.50, ingredientes: "café, ron, licor", imagen: "" }

  ];

  // Insertar solo si está vacío (para evitar duplicados cada vez que se reinicia el servidor)
  db.get("SELECT COUNT(*) as count FROM platos", (err, row) => {
    if (row.count === 0) {
      platosIniciales.forEach(p => {
        db.run(
          "INSERT INTO platos (nombre, categoria, precio, ingredientes, imagen) VALUES (?, ?, ?, ?, ?)",
          [p.nombre, p.categoria, p.precio, p.ingredientes || null, p.imagen || null]
        );
      });
    }
  });
});

// --------Rutas de la API----------
// GET platos - Devuelve todos los platos de la carta
app.get('/platos', (req, res) => {
  db.all("SELECT * FROM platos", [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

// Ruta base para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send("API The Colors funcionando");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor en http://localhost:3000");
});