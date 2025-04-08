import express from 'express';
import { getAirportSuggestions, searchFlights } from '../controllers/amedeus.controller.js';

const router = express.Router();

router.get('/airport-suggestions', getAirportSuggestions);
router.get('/flights', searchFlights);

export default router;