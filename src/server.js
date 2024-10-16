import express from 'express';
import corsMiddleware from './middlewares/cors.middleware.js';
import authRoutes from './routes/auth.routes.js';
import eventRoutes from './routes/event.routes.js';
import pointRoutes from './routes/point.routes.js';
import registrationRoutes from './routes/registration.routes.js';
import favoriteRoutes from './routes/favorite.routes.js';
import { getReport } from './controllers/report.controller.js';
import { initializeDatabase } from './config/sync.js';

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/points', pointRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/report', getReport);

app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    await initializeDatabase();
});
