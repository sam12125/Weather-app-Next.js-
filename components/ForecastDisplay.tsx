const ForecastDisplay = ({
  forecastData,
}: {
  forecastData: ForecastData[];
}) => {
  console.log(forecastData); // Log the forecastData to the console

  return (
    <div className="mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
      {forecastData.map((day, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{day.dt_txt}</h3>
          <p>High: {day.main.temp_max}°F</p>
          <p>Low: {day.main.temp_min}°F</p>
          <p>Condition: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastDisplay;
