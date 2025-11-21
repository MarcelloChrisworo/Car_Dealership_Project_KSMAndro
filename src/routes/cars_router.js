import express from 'express';
import CarsController from '../controllers/cars_controller.js';

const router = express.Router();
const carsController = new CarsController();

export function setCarRoutes(app) {
  app.use('/api/cars', router);

  router.post('/', carsController.createCar.bind(carsController));
  router.get('/', carsController.getAllCars.bind(carsController));
  router.get('/:id', carsController.getCarById.bind(carsController));
  router.put('/:id', carsController.updateCar.bind(carsController));
  router.delete('/:id', carsController.deleteCar.bind(carsController));
}