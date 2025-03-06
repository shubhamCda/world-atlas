import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) =>{
    const sortedCountry = [...countries].sort((a,b) =>{
      return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
    });

    setCountries(sortedCountry);
  }
  return (
    <>
      <section className="section-searchFilter container">
        <div className="select-section">
          <input
            type="text"
            value={search}
            placeholder="Enter country"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>

        <div>
          <button onClick={() => sortCountries("des")}>Desc</button>
        </div>
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
