"use client";

import { useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import ForecastDisplay from "../components/ForecastDisplay";

interface WeatherData {
  temperature: number;
  description: string;
}

interface ForecastData {
  date: string;
  temperatureHigh: number;
  temperatureLow: number;
  description: string;
}

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    let API_key = "dcdd5a972e3dabfc32aaba7939e28f1f";
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`
      );
      const data = await res.json();
      //   console.log("hy", data);

      if (!res.ok) {
        setError(data.message || "Error fetching weather data");
        return;
      }

      setWeatherData({
        temperature: data.main.temp,
        description: data.weather[0].description,
      });

      // Fetch 5-day forecast (you need to implement a similar API route for the forecast)
      const forecastRes = await fetch(
        `  https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_key}`
      );
      const data2 = await forecastRes.json();
      setForecastData(data2.list);
      //   console.log("a", forecastData);
    } catch (error) {
      setError("An error occurred while fetching the weather data.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Weather App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
          placeholder="Enter location"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      {forecastData.length > 0 && (
        <ForecastDisplay forecastData={forecastData} />
      )}
    </div>
  );
}
