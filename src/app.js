import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

const app = express();
//muestra las peticiones realizadas
app.use(morgan('dev'));
//midleware encargado de procesar los .json files
app.use(express.json());

app.use('/api', authRoutes);

export default app;


