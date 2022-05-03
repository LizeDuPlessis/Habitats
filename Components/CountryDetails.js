const CountryDetails = ({ country }) => {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div>
        <Link href="/Country">
          <a>
            <button className="my-2 mx-1 text-white text-left font-bold py-2 px-4 rounded bg-teal-500 hover:bg-teal-600 ">
              Back
            </button>
          </a>
        </Link>
      </div>

      <h1 className="text-4xl text-center">{country[0].name.common}</h1>

      <img className="w-5/6 mx-8  p-1" src={country[0].flags.png} alt="flag" />

      <div className="text-center">
        <p>
          <span className="text-lg font-bold">Capital City: </span>
          {country[0].capital[0]}
        </p>
        <p>
          <span className="text-lg font-bold">Continent: </span>
          {country[0].continents}
        </p>
        <div>
          Languages
          <ul>
            {country.languages &&
              country[0].languages.map((language) => (
                <li key={language.id}>{language.id}</li>
              ))}
          </ul>
        </div>
        <ShowMoreBtn country={country} />
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default CountryDetails;
