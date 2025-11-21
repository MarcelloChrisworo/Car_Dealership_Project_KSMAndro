export class CarsController {
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
  }

  createCar(req, res) {
    const carData = req.body;
    try {
      const newCar = this.inventoryService.addCar(carData);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  getAllCars(req, res) {
    try {
      const cars = this.inventoryService.getAllCars();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getCarById(req, res) {
    const { id } = req.params;
    try {
      const car = this.inventoryService.getCarById(id);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  updateCar(req, res) {
    const { id } = req.params;
    const carData = req.body;
    try {
      const updatedCar = this.inventoryService.updateCar(id, carData);
      if (updatedCar) {
        res.status(200).json(updatedCar);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  deleteCar(req, res) {
    const { id } = req.params;
    try {
      const deleted = this.inventoryService.deleteCar(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}