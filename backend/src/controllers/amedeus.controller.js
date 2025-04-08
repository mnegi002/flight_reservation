import AmadeusService from '../services/amedeus.service.js';

export const getAirportSuggestions = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || query.length < 2) {
      return res.json([]);
    }

    const suggestions = await AmadeusService.getAirportSuggestions(query);
    res.json(suggestions);
  } catch (error) {
    console.error("Error in getAirportSuggestions:", error);
    res.status(500).json({ 
      error: "Failed to fetch airport suggestions",
      details: error.message 
    });
  }
};

export const searchFlights = async (req, res) => {
  try {
    const { origin, destination, date } = req.query;
    
    if (!origin || !destination || !date) {
      return res.status(400).json({ 
        error: "Missing required parameters: origin, destination, date" 
      });
    }

    const flights = await AmadeusService.searchFlights(origin, destination, date);
    res.json(flights);
  } catch (error) {
    console.error("Error in searchFlights:", error);
    res.status(500).json({ 
      error: "Failed to fetch flight data",
      details: error.message 
    });
  }
};