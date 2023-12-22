import { pool } from "../index.js";

export const renderCar = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM car");
  res.render("cars", { cars: rows });
};

export const createCar = async (req, res) => {
  const newCar = req.body;
  await pool.query("INSERT INTO car set ?", [newCar]);
  res.redirect("/");
};

export const editCar = async (req, res) => {
  const { placa } = req.params;
  const [result] = await pool.query("SELECT * FROM car WHERE placa = ?", [
    placa,
  ]);
  res.render("carEdit", { car: result[0] });
};

export const updateCar = async (req, res) => {
  const { placa } = req.params;
  const newCar = req.body;
  await pool.query("UPDATE car set ? WHERE placa = ?", [newCar, placa]);
  res.redirect("/");
};

export const deleteCar = async (req, res) => {
  const { placa } = req.params;
  const result = await pool.query("DELETE FROM car WHERE placa = ?", [placa]);
  if (result.affectedRows === 1) {
    res.json({ message: "Car deleted" });
  }
  res.redirect("/"); 
};