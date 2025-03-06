import React, { useEffect, useState, useTransition } from "react";
import "./loading.css";
import { getData } from "../api/CountriesData";
import CountryCard from "../components/layout/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getData();
      console.log(res.data);

      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {countries.map((curCountry, index) => {
            return <CountryCard key={index} countryData={curCountry} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Country;
