import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the interesting facts
          <br />
          We're proud of
        </h2>
        <div className="gradient-cards">
          {countryFacts.map((curCountry) => {
            const { id, countryName, capital, population, interestingFact } =
              curCountry;

            return (
              <div className="card" key={id}>
                <div className="container-card bg-white-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">Capital: </span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">Population: </span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description">Interesting Facts: </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
