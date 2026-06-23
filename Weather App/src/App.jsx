import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "9bf60a05a4049a0e31f1c2ce89196016";

  const getWeather = async () => {
    if (!city) return;

    try {
      // 🌍 1. City → Weather API (simple version)
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();

      // ❌ error handling
      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
        return;
      }

      // ✅ success
      setWeather(data);
      setError("");

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-700 px-4">
      
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Weather App 🌦️
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-black outline-none"
          />

          <button
            onClick={getWeather}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-red-200 mt-3 text-center">{error}</p>
        )}

        {weather && (
          <div className="mt-6 text-center space-y-2">
            <h2 className="text-2xl font-bold">{weather.name}</h2>

            <p className="text-4xl font-bold">
              {weather.main.temp}°C
            </p>

            <p className="capitalize text-lg">
              {weather.weather[0].description}
            </p>

            <div className="flex justify-between mt-4 text-sm">
              <p>💨 {weather.wind.speed} m/s</p>
              <p>💧 {weather.main.humidity}%</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}