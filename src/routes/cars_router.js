import express from 'express';
import { CarsController } from '../controllers/cars_controller.js';
import { InventoryService } from '../services/inventory_service.js';

const router = express.Router();

// Instantiate Service and Controller (Dependency Injection)
const inventoryService = new InventoryService();
const carsController = new CarsController(inventoryService);

export function setCarRoutes(app) {
  app.use('/cars', router);

  // Bind controller methods to the instance to preserve 'this' context
  router.post('/', (req, res) => carsController.createCar(req, res));
  router.get('/', (req, res) => carsController.getAllCars(req, res));
  router.get('/:id', (req, res) => carsController.getCarById(req, res));
  router.put('/:id', (req, res) => carsController.updateCar(req, res));
  router.delete('/:id', (req, res) => carsController.deleteCar(req, res));
}