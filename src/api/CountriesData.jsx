import axios from "axios";
import CountryDetails from "../components/layout/CountryDetails";
import Country from "../pages/Country";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// get all data of Countries

export const getData = () => {
  return api.get("/all?fields=name,flags,population,region,capital");
};

// get individual data of the Country

export const getCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
