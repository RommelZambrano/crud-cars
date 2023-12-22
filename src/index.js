import express from "express";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { createPool } from "mysql2/promise";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear un pool de conexiones
const pool = createPool({
  host: "localhost", // Cambia 'localhost' por la dirección IP o el nombre del host del contenedor si es necesario
  user: "root",
  password: "123456",
  port: 3307, // Asegúrate de que este es el puerto correcto que tu contenedor de MySQL expone
  database: "automoviles",
});

// Middleware para logging
app.use(morgan("dev"));

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Puerto en el que la aplicación va a escuchar
app.listen(3000, () => {
  console.log("Server on port 3000");
});

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/ping', async (req, res) => {
  try {
    const [result,] = await pool.query('SELECT NOW()');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al conectar con la base de datos');
  }
});

export default app;
