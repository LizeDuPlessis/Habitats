const WeatherDetails = ({ countryWeather, country }) => {
  return (
    <div className="border-black border-solid border-2 rounded-lg bg-red-600">
      <h1 className="text-center">
        Weather in <span>{country[0].capital}</span>
      </h1>
      <ul className="flex flex-wrap justify-center">
        <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
          Main{" "}
          <span className="text-4xl font-bold">
            {Math.round(countryWeather?.main?.temp)}
            <span>ºC</span>
          </span>
        </li>
        <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
          Feels like{" "}
          <span className="text-4xl font-bold">
            {Math.round(countryWeather?.main?.feels_like)}
            <span>ºC</span>
          </span>
        </li>
        <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
          Low{" "}
          <span className="text-4xl font-bold">
            {Math.round(countryWeather?.main?.temp_min)}
            <span>ºC</span>
          </span>
        </li>
        <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
          High{" "}
          <span className="text-4xl font-bold">
            {Math.round(countryWeather?.main?.temp_max)}
            <span>ºC</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
