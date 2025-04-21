import React from 'react';

type WeatherData = {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string; icon: string }[];
};

const WeatherCard = ({ data }: { data: WeatherData }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p className="text-4xl">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>
      <img 
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
