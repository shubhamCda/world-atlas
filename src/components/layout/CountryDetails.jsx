import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryData } from "../../api/CountriesData";
import "../../pages/loading.css";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData(params.id);
      // console.log(res.data[0]);

      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      console.log(country);

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
  console.log(params);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default CountryDetails;
