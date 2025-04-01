import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const FlightComp = () => {
    const [tripType, setTripType] = useState('round-trip');
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departureDate: '',
        returnDate: '',
        passengers: 1,
        class: 'economy'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching flights:', { tripType, ...formData });
        // Add your flight search logic here
    };

    return (
        <div className="relative py-8 px-4 sm:px-6 lg:px-8 ">
            {/* Main container with "Flights" heading */}
            <div className="relative  mx-auto  rounded-xl shadow-lg overflow-hidden">
                {/* "Flights" heading at the top */}
                <div className="bg-white  rounded-t-xl w-[10%] p-1">
                    <p className="text-lg font-bold text-center  text-black">Flights</p>
                </div>

                {/* Trip Type Selection - Radio buttons in one line */}
                <div className="flex  bg-white px-6 py-3">
                    <label className="flex items-center mr-6">
                        <input
                            type="radio"
                            name="tripType"
                            value="round-trip"
                            checked={tripType === 'round-trip'}
                            onChange={() => setTripType('round-trip')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Round Trip</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="tripType"
                            value="one-way"
                            checked={tripType === 'one-way'}
                            onChange={() => setTripType('one-way')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">One Way</span>
                    </label>
                </div>

                {/* Flight Search Form */}
                <form onSubmit={handleSubmit} className="p-4 flex items-center justify-center bg-white   space-y-4">
                    <div className="grid grid-cols-1  md:grid-cols-5  gap-2 ">
                        {/* From */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">FROM</label>
                            <input
                                type="text"
                                name="from"
                                placeholder="CITY OR AIRPORT"
                                value={formData.from}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* To */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">TO</label>
                            <input
                                type="text"
                                name="to"
                                placeholder="CITY OR AIRPORT"
                                value={formData.to}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Departure Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">DEPARTURE DATE</label>
                            <input
                                type="date"
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Return Date - only shown for round trips */}
                        {tripType === 'round-trip' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">RETURN DATE</label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    value={formData.returnDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        )}
                        {/* travel  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">TRAVELLERS & CLASS</label>

                            <select
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleInputChange}
                                className="w-[90%] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                                    </option>
                                ))}
                            </select>
                            {/* <select
                                    name="class"
                                    value={formData.class}
                                    onChange={handleInputChange}
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="economy">Economy</option>
                                    <option value="premium-economy">Premium Economy</option>
                                    <option value="business">Business</option>
                                    <option value="first">First Class</option>
                                </select> */}

                        </div>
                    </div>
                        <div className='flex py-2 items-end  '>
                            
                            <p
                                type="submit"
                                className="px-4   bg-blue-800 cursor-pointer hover:bg-blue-700 text-white font-bold p-2 flex items-center justify-center rounded-lg transition duration-200"
                            >
                                <FaSearch size={22}/>
                            </p>
                        </div>





                </form>
            </div>
        </div>
    );
};

export default FlightComp;