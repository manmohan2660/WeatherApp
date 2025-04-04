A Weather Dashboard application that allows users to search for real-time weather updates of any city. The app also features a dark/light mode toggle and keeps a history of searched cities.

🌟 Features
Fetches real-time weather data using OpenWeather API.

Search history for easy access to previous searches.

Dark & Light mode toggle for better UI/UX.

Responsive design for all screen sizes.

🛠️ Tech Stack
Frontend: React, Bootstrap, CSS

API: OpenWeather API

State Management: React Hooks (useState, useEffect)

Local Storage for storing search history & theme preference

Setup Instructions
1️ Clone the Repository
git clone https://github.com/your-username/weather-dashboard.git
cd weatherApp

2 Install Dependencies
npm install
3 Get OpenWeather API Key
Go to OpenWeather API

Sign up and generate an API key

Replace API_KEY in WeatherDashboard.jsx with your key
API Integration Details
Base URL: https://api.openweathermap.org/data/2.5/weather

Example Request:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
Rate Limit: Free-tier allows 60 requests/min

Units Supported: Metric (°C), Imperial (°F), Standard (K)

Made by Manmohan




