import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import SearchHistory from "./SearchHistory";
import ThemeToggle from "./ThemeToggle";
import "./WeatherDashboard.css"; // Import custom styles

const API_KEY = "78be4a0bb986adb107ceeb99a39133b3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("weatherHistory"));
    if (storedHistory) setHistory(storedHistory);
  }, []);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setHistory((prev) => {
        const newHistory = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
        localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-dashboard">
      <h1 className="title">Weather Dashboard</h1>
      <ThemeToggle />
      <div className="search-container">
        <input
          className="search-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="search-button" onClick={fetchWeather} disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      <SearchHistory history={history} onSelectCity={setCity} />
    </div>
  );
}
