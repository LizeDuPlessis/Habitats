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
          "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c00ada06a603c24db5737b2c99743430"
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
        <WeatherDetails countryWeather={countryWeather} />
      </div>
    </div>
  );
};

export default Details;
