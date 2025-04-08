import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { DatePickerDemo } from "../shadcn/DatePicker";
import { GiCommercialAirplane } from "react-icons/gi";
import { baseUrl } from "../../App";

const FlightComp = () => {
    const [tripType, setTripType] = useState("round-trip");
    const [isReturnDateDisabled, setIsReturnDateDisabled] = useState(false);
    const [showTravellerModal, setShowTravellerModal] = useState(false);
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        departureDate: "",
        returnDate: "",
        adults: 1,
        children: 0,
        infants: 0,
        cabinClass: "ECONOMY"
    });

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [suggestions, setSuggestions] = useState({
        from: {
            list: [],
            show: false
        },
        to: {
            list: [],
            show: false
        }
    });

    const cabinClasses = [
        "ECONOMY",
        "PREMIUM ECONOMY",
        "BUSINESS CLASS",
        "FIRST CLASS"
    ];

    const handleTravellerChange = (type, value) => {
        setFormData(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleCabinClassChange = (classType) => {
        setFormData(prev => ({
            ...prev,
            cabinClass: classType
        }));
    };

    // Function to fetch airport suggestions from API
    const fetchAirportSuggestions = async (query, field) => {
        if (query.length < 2) {
            setSuggestions(prev => ({
                ...prev,
                [field]: { ...prev[field], list: [] }
            }));
            return;
        }

        try {
            const response = await axios.get(`${baseUrl}/api/airport-suggestions`, {
                params: { query },
            });
            setSuggestions(prev => ({
                ...prev,
                [field]: { ...prev[field], list: response.data }
            }));
        } catch (error) {
            console.error("Error fetching airport suggestions:", error);
            setSuggestions(prev => ({
                ...prev,
                [field]: { ...prev[field], list: [] }
            }));
        }
    };

    // Debounce function to limit API calls
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    // Create debounced functions for each field
    const debouncedFromFetch = debounce(
        (query) => fetchAirportSuggestions(query, "from"),
        500
    );
    const debouncedToFetch = debounce(
        (query) => fetchAirportSuggestions(query, "to"),
        500
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "from") {
            debouncedFromFetch(value);
            setSuggestions(prev => ({
                ...prev,
                from: { ...prev.from, show: value.length > 0 }
            }));
        } else if (name === "to") {
            debouncedToFetch(value);
            setSuggestions(prev => ({
                ...prev,
                to: { ...prev.to, show: value.length > 0 }
            }));
        }
    };

    const selectSuggestion = (field, suggestion) => {
        setFormData(prev => ({ ...prev, [field]: suggestion.code }));
        setSuggestions(prev => ({
            ...prev,
            [field]: { ...prev[field], show: false }
        }));
    };

    const searchFlights = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setHasSearched(true);

        try {
            const response = await axios.get(`${baseUrl}/api/flights`, {
                params: {
                    origin: formData.from.toUpperCase(),
                    destination: formData.to.toUpperCase(),
                    date: formData.departureDate,
                    adults: formData.adults,
                    children: formData.children,
                    infants: formData.infants,
                    cabinClass: formData.cabinClass,
                    returnDate: tripType === "round-trip" ? formData.returnDate : undefined
                },
            });
            setFlights(response.data.data || []);
        } catch (error) {
            console.error("Error fetching flights:", error);
            setError("Failed to fetch flight data. Please try again.");
            setFlights([]);
        }
        setLoading(false);
    };

    const handlePayment = async (amount) => {
        const { data } = await axios.post(`${baseUrl}/create-order`, {
            amount,
            currency: "INR",
        });

        const options = {
            key: "your_razorpay_key_id",
            amount: data.amount,
            currency: data.currency,
            name: "Flight Booking",
            description: "Flight ticket purchase",
            order_id: data.id,
            handler: function (response) {
                alert("Payment successful: " + response.razorpay_payment_id);
            },
            prefill: {
                name: "John Doe",
                email: "john@example.com",
                contact: "9999999999",
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="relative py-8 px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto rounded-xl shadow-lg overflow-visible">
                <div className="bg-white rounded-t-xl w-[40%] lg:w-[10%] p-1">
                    <p className="text-lg font-bold text-center text-black">Flights</p>
                </div>

                {/* Trip Type Selection */}
                <div className="flex bg-white rounded-tr-xl px-6 py-3">
                    <label className="flex items-center mr-6">
                        <input
                            type="radio"
                            name="tripType"
                            value="round-trip"
                            checked={tripType === "round-trip"}
                            onChange={() => {
                                setTripType("round-trip");
                                setIsReturnDateDisabled(false);
                            }}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Round Trip</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="tripType"
                            value="one-way"
                            checked={tripType === "one-way"}
                            onChange={() => {
                                setTripType("one-way");
                                setIsReturnDateDisabled(true);
                            }}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">One Way</span>
                    </label>
                </div>

                {/* Flight Search Form */}
                <form onSubmit={searchFlights} className="p-4 flex items-center rounded-b-xl justify-center bg-white space-y-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {/* FROM Field */}
                        <div className="relative w-full p-1 h-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <label className="block text-xs pl-8 font-semibold text-gray-700 mb-1">FROM</label>
                            <div className="flex space-x-2">
                                <img src="/images/flyup.svg" alt="up" />
                                <input
                                    type="text"
                                    name="from"
                                    placeholder="CITY OR AIRPORT"
                                    value={formData.from}
                                    onChange={handleInputChange}
                                    onFocus={() => setSuggestions(prev => ({
                                        ...prev,
                                        from: { ...prev.from, show: formData.from.length > 0 }
                                    }))}
                                    onBlur={() => setTimeout(() => setSuggestions(prev => ({
                                        ...prev,
                                        from: { ...prev.from, show: false }
                                    })), 200)}
                                    className="text-sm font-bold w-full focus:outline-none text-gray-700 placeholder:text-gray-500"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            {suggestions.from.show && suggestions.from.list.length > 0 && (
                                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {suggestions.from.list.map((suggestion) => (
                                        <li
                                            key={suggestion.code}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => selectSuggestion("from", suggestion)}
                                        >
                                            {suggestion.fullName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* TO Field */}
                        <div className="relative w-full p-1 h-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <label className="block text-xs pl-8 font-semibold text-gray-700 mb-1">TO</label>
                            <div className="flex space-x-2">
                                <img src="/images/fly.svg" alt="up" />
                                <input
                                    type="text"
                                    name="to"
                                    placeholder="CITY OR AIRPORT"
                                    value={formData.to}
                                    onChange={handleInputChange}
                                    onFocus={() => setSuggestions(prev => ({
                                        ...prev,
                                        to: { ...prev.to, show: formData.to.length > 0 }
                                    }))}
                                    onBlur={() => setTimeout(() => setSuggestions(prev => ({
                                        ...prev,
                                        to: { ...prev.to, show: false }
                                    })), 200)}
                                    className="text-sm font-bold w-full focus:outline-none text-gray-900 placeholder:text-gray-500"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            {suggestions.to.show && suggestions.to.list.length > 0 && (
                                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {suggestions.to.list.map((suggestion) => (
                                        <li
                                            key={suggestion.code}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => selectSuggestion("to", suggestion)}
                                        >
                                            {suggestion.fullName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* DEPARTURE DATE */}
                        <div className="relative w-full p-1 h-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <label className="text-gray-700 mb-1 block text-xs pl-8 font-semibold">DEPARTURE DATE</label>
                            <DatePickerDemo
                                placeholder="DEPART"
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* RETURN DATE (only shown for round trips) */}
                        {tripType === "round-trip" && (
                            <div className="relative w-full p-1 h-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <label className="text-gray-700 mb-1 block text-xs pl-8 font-semibold">RETURN DATE</label>
                                <DatePickerDemo
                                    name="returnDate"
                                    value={formData.returnDate}
                                    onChange={handleInputChange}
                                    disabled={isReturnDateDisabled}
                                    placeholder="RETURN"
                                    className={isReturnDateDisabled ? "opacity-50 cursor-not-allowed" : ""}
                                />
                            </div>
                        )}

                        {/* TRAVELLERS & CLASS */}
                        <div className="relative w-full p-1 py-2 h-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <label className="text-gray-700 mb-1 block text-xs pl-8 font-semibold">TRAVELLERS & CLASS</label>
                            <div className="flex items-center">
                                <img src="/images/passenger.svg" alt="passengers" className="h-5 w-5 ml-2" />
                                <div 
                                    className="focus:outline-none text-gray-900 text-sm font-bold focus:ring-none w-[85%] pl-2 cursor-pointer"
                                    onClick={() => setShowTravellerModal(!showTravellerModal)}
                                >
                                    {`${formData.adults} Adult${formData.adults !== 1 ? 's' : ''}, ${formData.children} Child${formData.children !== 1 ? 'ren' : ''}, ${formData.infants} Infant${formData.infants !== 1 ? 's' : ''}, ${formData.cabinClass}`}
                                </div>
                            </div>

                            {/* Traveller selection modal */}
                            {showTravellerModal && (
                                <div className="absolute z-10 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-300 p-4">
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">Adults<br/>(47 yrs)</span>
                                            <div className="flex items-center">
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('adults', Math.max(1, formData.adults - 1))}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-3">{formData.adults}</span>
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('adults', formData.adults + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">Child<br/>(0-17 yrs)</span>
                                            <div className="flex items-center">
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('children', Math.max(0, formData.children - 1))}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-3">{formData.children}</span>
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('children', formData.children + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="font-semibold">Infant<br/>(Upto 2 yrs)</span>
                                            <div className="flex items-center">
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('infants', Math.max(0, formData.infants - 1))}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-3">{formData.infants}</span>
                                                <button 
                                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                    onClick={() => handleTravellerChange('infants', formData.infants + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            {cabinClasses.map((classType) => (
                                                <div key={classType} className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id={classType}
                                                        name="cabinClass"
                                                        checked={formData.cabinClass === classType}
                                                        onChange={() => handleCabinClassChange(classType)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor={classType} className="ml-2 text-gray-700">
                                                        {classType}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                        onClick={() => setShowTravellerModal(false)}
                                    >
                                        DONE
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className=" md:hidden rounded-lg w-full flex bg-blue-800 hover:bg-blue-700  h-full items-start p-2">
                            <button
                                type="submit"
                                className="p-2  focus:outline-none focus:ring-0 text-white font-bold w-full flex items-center justify-between  transition duration-200"
                            >
                               Search <FaSearch size={22} className=""/>
                            </button>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className=" mb-3 hidden md:flex h-full items-start p-2">
                        <button
                            type="submit"
                            className="p-4 px-5 focus:outline-none focus:ring-0 bg-blue-800 hover:bg-blue-700 text-white font-bold flex items-center justify-center rounded-lg transition duration-200"
                        >
                            <FaSearch size={24} />
                        </button>
                    </div>
                </form>
            </div>

            {/* Flight Results */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                {loading && <p>Loading flights...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {hasSearched && !loading && flights.length === 0 && (
                    <p>No flights found</p>
                )}
                {flights.length > 0 && (
                    <ul className="space-y-4">
                        {flights.map((flight, index) => (
                            <li key={index} className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
                                <span>
                                    {flight.itineraries[0].segments[0].departure.iataCode} ➝{" "}
                                    {flight.itineraries[0].segments[0].arrival.iataCode}
                                </span>
                                <span className="font-bold">${flight.price.total}</span>
                                <button
                                    onClick={() => handlePayment(flight.price.total)}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                                >
                                    Book Now
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FlightComp;