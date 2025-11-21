// filepath: /car-dealership-app/car-dealership-app/src/services/inventory_service.js
import { cars } from "../data/cars.js";

export function addCar(newCar) {
  cars.push(newCar);
  return cars;
}

export function getAllCars() {
  return cars;
}

export function updateCar(id, updatedDetails) {
  return cars.map(car =>
    car.id === id ? { ...car, ...updatedDetails } : car
  );
}

export function deleteCar(id) {
  return cars.filter(car => car.id !== id);
}