import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default class AmadeusService {
  static async getAccessToken() {
    try {
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.AMADEUS_CLIENT_ID,
          client_secret: process.env.AMADEUS_CLIENT_SECRET,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      return response.data.access_token;
    } catch (error) {
      throw new Error(`Failed to get Amadeus access token: ${error.message}`);
    }
  }

  static async getAirportSuggestions(query) {
    try {
      const accessToken = await this.getAccessToken();
      const response = await axios.get(
        "https://test.api.amadeus.com/v1/reference-data/locations",
        {
          params: {
            subType: "CITY,AIRPORT",
            keyword: query,
            page: { limit: 10 },
          },
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      return response.data.data.map((location) => ({
        code: location.iataCode,
        name: location.name,
        city: location.address.cityName || location.name,
        country: location.address.countryName,
        fullName: `${location.iataCode} - ${location.name}, ${
          location.address.cityName || ""
        }, ${location.address.countryName}`,
      }));
    } catch (error) {
      throw new Error(`Failed to fetch airport suggestions: ${error.message}`);
    }
  }

  static async searchFlights(origin, destination, date) {
    try {
      const accessToken = await this.getAccessToken();
  
      // Extract only the date part (YYYY-MM-DD)
      const formattedDate = date.split("T")[0]; 
      console.log("Fetching flights with:", { origin, destination, formattedDate });
  
      const response = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          params: {
            originLocationCode: origin.toUpperCase(),
            destinationLocationCode: destination.toUpperCase(),
            departureDate: formattedDate,
            adults: 1,
            currencyCode: "USD",
            max: 10,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error fetching flights:", error.response?.data || error.message);
      throw new Error(`Failed to fetch flights: ${error.response?.data?.errors?.[0]?.detail || error.message}`);
    }
  }
  
}