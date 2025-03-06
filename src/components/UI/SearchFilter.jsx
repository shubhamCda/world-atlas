import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };
  return (
    <>
      <section className="section-searchFilter container">
        <div>
          <input
            type="text"
            value={search}
            placeholder="Enter country"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
