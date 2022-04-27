import Link from "next/link";
import ShowMoreBtn from "./ShowMoreBtn";

const CountryDetails = ({ country }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div>
        <Link href="/Country">
          <a>
            <button className="my-2 mx-1 text-white font-bold py-2 px-4 rounded bg-teal-500 hover:bg-teal-600">
              Back
            </button>
          </a>
        </Link>
      </div>
      <h1 className="text-left">{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt="flag" />
      <div>
        <p>
          <span className="text-lg font-bold">Capital City: </span>
          {country[0].capital}
        </p>
        <p>
          <span className="text-lg font-bold">Continent: </span>
          {country[0].continents}
        </p>
        <div>
          Languages
          <ul>
            {country[0].languages &&
              country?.languages?.map((language) => (
                <li key={language.id}>{language.id}</li>
              ))}
          </ul>
        </div>
        <ShowMoreBtn country={country} />
      </div>
    </div>
  );
};

export default CountryDetails;
