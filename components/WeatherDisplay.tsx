// components/WeatherDisplay.tsx

interface WeatherData {
  temperature: number;
  description: string;
}

const WeatherDisplay = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <div className="mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
      <p>Temperature: {weatherData.temperature}°F</p>
      <p>Condition: {weatherData.description}</p>
    </div>
  );
};

export default WeatherDisplay;
