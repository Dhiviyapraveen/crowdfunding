import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminFilmRoutes from './routes/adminFilmRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin/films', adminFilmRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
