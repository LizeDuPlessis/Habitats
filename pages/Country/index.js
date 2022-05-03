import Head from "next/head";
import CountryList from "../../Components/CountryList";

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: { country: data },
  };
};

const Country = ({ country }) => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="habitats" />
        <title>Country | List</title>
      </Head>

      <CountryList country={country} />
    </div>
  );
};

export default Country;
