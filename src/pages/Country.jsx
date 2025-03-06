import React, { useEffect, useState, useTransition } from "react";
import "./loading.css";
import { getData } from "../api/CountriesData";
import CountryCard from "../components/layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

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

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;

    return country.region === filter;
  };

  const filterCountry = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        <ul className="grid grid-four-cols">
          {filterCountry.map((curCountry, index) => {
            return <CountryCard key={index} countryData={curCountry} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Country;
