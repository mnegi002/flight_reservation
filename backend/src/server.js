import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import amadeusRoutes from './routes/amedeus.routes.js';
// import paymentRoutes from './routes/payment.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

// CORS configuration
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({ origin: FRONTEND_URL }));

// Routes
app.use('/api', amadeusRoutes);
// app.use('/api', paymentRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Amadeus API mode: ${process.env.AMADEUS_ENV || 'test'}`);
});