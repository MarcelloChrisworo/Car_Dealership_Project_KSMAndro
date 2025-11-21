import express from 'express';
import { setCarRoutes } from './routes/cars_router.js';
import { logger } from './middlewares/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

setCarRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});