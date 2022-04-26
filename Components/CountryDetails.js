import Link from "next/link";

const CountryDetails = ({ country }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
      <div>
        <Link href="/Country">
          <a>
            <button className="my-2 mx-1 text-white font-bold py-2 px-4 rounded bg-teal-500 hover:bg-teal-600">
              Back
            </button>
          </a>
        </Link>
      </div>
      <h1 className="text-center">{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt="flag" />
      <div>
        <p>
          <span className="text-lg font-bold">Country: </span>
          {country[0].name.common}
        </p>
        <p>
          <span className="text-lg font-bold">Capital: </span>
          {country[0].capital}
        </p>
        <p>
          <span className="text-lg font-bold">Continent: </span>
          {country[0].continents}
        </p>
      </div>

      {/* {country.languages &&
        country.languages.map((item) => (
          <h1 key={item.id} item={item}>
            {item?.languages}
          </h1>
        ))} */}
    </div>
  );
};

export default CountryDetails;
