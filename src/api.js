import axios from "axios";

const API_KEY = "78be4a0bb986adb107ceeb99a39133b3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data.");
  }
};
