import express from "express";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { createPool } from "mysql2/promise";
import carsRoute from "./routes/cars.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3307,
  database: "automoviles",
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(carsRoute);

app.listen(8000, () => {
  console.log("Server on port 8000");
});

export default app;
