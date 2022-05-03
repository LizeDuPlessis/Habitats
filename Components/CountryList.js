import Image from "next/image";
import React from "react";
import Link from "next/link";
import CountryCard from "./CountryCard";
import { useState } from "react";

export default function CountryList({ country }) {
  const [userInput, setUserInput] = useState("");

  const [userSearched, setUserSearched] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const handleUserSearched = (e) => {
    e.preventDefault();
    setUserSearched(!userSearched);
  };

  const filteredCountry = country.filter((country) =>
    country?.name.common.toLowerCase().includes(userInput.toLowerCase())
  );
  return (
    <>
      <form type="submit" className="text-center">
        <input
          className="w-4/5 h-9 text-lg shadow appearance-none rounded-lg border-solid border-1 border-stone-300 focus:shadow-outline"
          type="input"
          placeholder="Type to search..."
          onChange={handleUserInput}
          value={userInput}
        />
        <button
          className=" h-9 ml-3 shadow appearance-none rounded-lg border-solid border-1 border-stone-300 hover:shadow "
          onClick={handleUserSearched}
        >
          Search
        </button>
      </form>
      <CountryCard>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 text-lg">
          {filteredCountry.length ? (
            filteredCountry.map((country) => (
              <Link
                href={`/Country/${country?.name.common}`}
                key={country?.name.common}
              >
<<<<<<< Updated upstream
                <a className="w-full border-solid  border-black border-2 hover:box-content rounded-lg mt-5 text-center ">
=======
                <a className="w-100 h-100 border-solid border-black border-2 hover:box-content rounded-lg mt-5 text-center hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-4 ">
>>>>>>> Stashed changes
                  <img
                    className="mt-5"
                    src={country?.flags.png}
                    alt="country-flag"
                  />

                  <h2 className=" break-words">{country?.name.common}</h2>
                </a>
              </Link>
            ))
          ) : (
            <div className="text-center mt-5 ">
              <Image
                src="/try_again.jpg"
                width={350}
                height={350}
                alt="try_again"
              />

              <h1>Uhhh..Try again!</h1>
            </div>
          )}
        </div>
      </CountryCard>
    </>
  );
}
