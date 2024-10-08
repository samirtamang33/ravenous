import React from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import "./App.css";

const businesses = [
  {
    id: 1,
    imageSrc: "https://via.placeholder.com/150",
    name: "Dalle Bowl",
    address: "Kamaladi",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46000",
    category: "Nepalese",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 2,
    imageSrc: "https://via.placeholder.com/150",
    name: "MoMo Magic Cafe",
    address: "New Baneshwor",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46001",
    category: "Cafe",
    rating: 4.0,
    reviewCount: 120,
  },
  {
    id: 3,
    imageSrc: "https://via.placeholder.com/150",
    name: "Pizza Hub",
    address: "Thamel",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46002",
    category: "Italian",
    rating: 3.5,
    reviewCount: 85,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
