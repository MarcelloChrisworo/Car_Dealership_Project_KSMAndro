export function validateCarData(car) {
  const { make, model, year, price } = car;
  if (!make || !model || !year || !price) {
    return { valid: false, message: "All fields are required." };
  }
  if (typeof year !== 'number' || year < 1886 || year > new Date().getFullYear()) {
    return { valid: false, message: "Year must be a valid number between 1886 and the current year." };
  }
  if (typeof price !== 'number' || price <= 0) {
    return { valid: false, message: "Price must be a positive number." };
  }
  return { valid: true };
}

export function formatCarData(car) {
  return {
    ...car,
    price: parseFloat(car.price).toFixed(2),
    status: car.status || 'available'
  };
}