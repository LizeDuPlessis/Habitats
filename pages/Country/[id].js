import CountryDetails from "../../Components/CountryDetails";
import { useState, useEffect } from "react";
import WeatherDetails from "../../Components/WeatherDetails";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const paths = data.map((country) => {
    return {
      params: { id: country?.name.common },
    };
  });
  console.log(data);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();
  return {
    props: { country: data },
  };
};

const Details = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  useEffect(() => {
    const getCountryWeather = async () => {
      try {
        const res = await fetch(
<<<<<<< HEAD
<<<<<<< Updated upstream
          "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c00ada06a603c24db5737b2c99743430"
=======
          `https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&units=metric&appid=${API_KEY}`
>>>>>>> Stashed changes
=======
          `https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&units=metric&appid=c00ada06a603c24db5737b2c99743430`
>>>>>>> Habitats
        );
        const data = await res.json();
        setCountryWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    getCountryWeather();
  }, []);
  console.log(countryWeather);
  return (
    <div>
      <CountryDetails country={country} />
      <div>
        <WeatherDetails countryWeather={countryWeather} country={country} />
      </div>
    </div>
  );
};

export default Details;
