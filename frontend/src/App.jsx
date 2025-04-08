import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Travel from "./pages/Travel";
import Flight from './pages/Flight';

export const baseUrl = "https://dev.airlinebookingdeals.com"
// export const baseUrl = "http://localhost:5000"

export default function App() {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flight" element={<Flight/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
