import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Get flight offers from Amadeus API
app.get("/flights", async (req, res) => {
  try {
    const { origin, destination, date } = req.query;

    // Get Amadeus authentication token
    const tokenResponse = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      `grant_type=client_credentials&client_id=${process.env.AMADEUS_API_KEY}&client_secret=${process.env.AMADEUS_API_SECRET}`,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch flight offers
    const flightResponse = await axios.get(
      `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1&currencyCode=USD`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json(flightResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
});

// Create a Razorpay order
app.post("/create-order", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
