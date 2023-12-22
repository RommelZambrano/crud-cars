import { pool } from "../index.js";

export const renderCar = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM car");
    res.render("cars", { cars: rows });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createCar = async ({ body }, res) => {
  try {
    await pool.query("INSERT INTO car SET ?", [body]);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const editCar = async ({ params: { placa } }, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM car WHERE placa = ?", [placa]);
    res.render("carEdit", { car: rows[0] });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCar = async ({ params: { placa }, body }, res) => {
  try {
    await pool.query("UPDATE car SET ? WHERE placa = ?", [body, placa]);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCar = async ({ params: { placa } }, res) => {
  try {
    const result = await pool.query("DELETE FROM car WHERE placa = ?", [placa]);
    if (result.affectedRows === 1) {
      res.json({ message: "Car deleted" });
    } else {
      res.status(404).send("Car not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
