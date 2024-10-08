import React from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
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
  {
    id: 4,
    imageSrc: "https://via.placeholder.com/150",
    name: "Burger Palace",
    address: "Patan",
    city: "Lalitpur",
    state: "Bagmati",
    zipCode: "46003",
    category: "Fast Food",
    rating: 4.7,
    reviewCount: 70,
  },
  {
    id: 5,
    imageSrc: "https://via.placeholder.com/150",
    name: "Sushi House",
    address: "Bhaktapur",
    city: "Bhaktapur",
    state: "Bagmati",
    zipCode: "46004",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 50,
  },
  {
    id: 6,
    imageSrc: "https://via.placeholder.com/150",
    name: "Cafe Delight",
    address: "Kirtipur",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46005",
    category: "Cafe",
    rating: 4.3,
    reviewCount: 110,
  },
  {
    id: 7,
    imageSrc: "https://via.placeholder.com/150",
    name: "Tandoori Nights",
    address: "Jamal",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46006",
    category: "Indian",
    rating: 4.6,
    reviewCount: 95,
  },
  {
    id: 8,
    imageSrc: "https://via.placeholder.com/150",
    name: "Ice Cream Factory",
    address: "Dhulikhel",
    city: "Dhulikhel",
    state: "Bagmati",
    zipCode: "46007",
    category: "Dessert",
    rating: 4.9,
    reviewCount: 40,
  },
  {
    id: 9,
    imageSrc: "https://via.placeholder.com/150",
    name: "Healthy Eats",
    address: "Boudhanath",
    city: "Kathmandu",
    state: "Bagmati",
    zipCode: "46008",
    category: "Health Food",
    rating: 4.2,
    reviewCount: 60,
  },
];

function App() {
  const handleSearch = (term, location, sortBy) => {
    console.log(
      `Search Term: ${term}, Location: ${location}, Sort By: ${sortBy}`
    );
    // Here you will eventually call the Yelp API
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
