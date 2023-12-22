import { Router } from "express";
import * as controllerCars  from "../controller/carsController.js";
const router = Router();

router.get("/", controllerCars.renderCar);
router.post("/add", controllerCars.createCar);
router.get("/update/:placa", controllerCars.editCar);
router.post("/update/:placa", controllerCars.updateCar);
router.get("/delete/:placa", controllerCars.deleteCar);

export default router; 