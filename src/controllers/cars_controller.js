export class CarsController {
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
  }

  createCar(req, res) {
    const carData = req.body;
    try {
      // Basic validation
      if (!carData.make || !carData.model || !carData.price) {
        return res.status(400).json({ message: "Make, model, and price are required" });
      }
      const newCar = this.inventoryService.addCar(carData);
      res.status(201).json({ message: "Car created successfully", data: newCar });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getAllCars(req, res) {
    try {
      // Handle Query Parameter ?make=...
      const { make } = req.query;
      const cars = this.inventoryService.getAllCars({ make });
      res.status(200).json({ message: "Success retrieving cars", data: cars });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getCarById(req, res) {
    const { id } = req.params;
    try {
      const car = this.inventoryService.getCarById(id);
      if (car) {
        res.status(200).json({ message: "Success retrieving car", data: car });
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
        res.status(200).json({ message: "Car updated successfully", data: updatedCar });
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  deleteCar(req, res) {
    const { id } = req.params;
    try {
      const deletedCar = this.inventoryService.deleteCar(id);
      if (deletedCar) {
        res.status(200).json({ message: "Car deleted successfully", data: deletedCar });
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}