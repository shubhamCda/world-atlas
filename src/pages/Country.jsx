import React, { useEffect, useState, useTransition } from 'react'
import "./loading.css";
import { getData } from '../api/CountriesData';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    startTransition(async () => {
      const res = await getData();
      console.log(res.data);
      
      setCountries(res.data);
    })
  },[])

  if (isPending) {
    return <span className="loader">L &nbsp; ading</span>
  }

  return (
    <div>
      <h1>This is Country page.</h1>
    </div>
  )
}

export default Country
