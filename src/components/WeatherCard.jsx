import React from "react";
import "./WeatherCard.css"; // Import the CSS file

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2 className="weather-city">{weather.name}</h2>
      <p className="weather-description">{weather.weather[0].description}</p>
      <p className="weather-temp">{weather.main.temp}°C</p>
      <p className="weather-humidity">Humidity: {weather.main.humidity}%</p>
      <p className="weather-wind">Wind: {weather.wind.speed} km/h</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="weather icon"
      />
    </div>
  );
}
