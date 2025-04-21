import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
      setError(null);
    } catch (err: any) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </main>
  );
};

export default Home;
