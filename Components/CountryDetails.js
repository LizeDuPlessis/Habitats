const CountryDetails = ({ country }) => {
  return (
    <div>
      <p>
        <span>Country: </span>
        {country[0].name.common}
      </p>
      <p>
        <span>Capital: </span>
        {country[0].capital}
      </p>
      <p>
        <span>Continent: </span>
        {country[0].continents}
      </p>
    </div>
  );
};

export default CountryDetails;
