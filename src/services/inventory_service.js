// filepath: /car-dealership-app/car-dealership-app/src/services/inventory_service.js
import { cars } from "../data/cars.js";

export class InventoryService {
  getAllCars(filter) {
    // Filter logic for Query Parameter
    if (filter && filter.make) {
      return cars.filter(car => car.make.toLowerCase() === filter.make.toLowerCase());
    }
    return cars;
  }

  getCarById(id) {
    return cars.find(car => car.id === parseInt(id));
  }

  addCar(carData) {
    // Generate new ID
    const newId = cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1;
    const newCar = { id: newId, ...carData };
    cars.push(newCar);
    return newCar;
  }

  updateCar(id, carData) {
    const index = cars.findIndex(car => car.id === parseInt(id));
    if (index !== -1) {
      // Update existing car
      cars[index] = { ...cars[index], ...carData };
      return cars[index];
    }
    return null;
  }

  deleteCar(id) {
    const index = cars.findIndex(car => car.id === parseInt(id));
    if (index !== -1) {
      // Remove car
      const deletedCar = cars.splice(index, 1);
      return deletedCar[0];
    }
    return null;
  }
}