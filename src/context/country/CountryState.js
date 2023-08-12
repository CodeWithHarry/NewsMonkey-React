import CountryContext from "./CountryContext";
import { useState, useEffect } from "react";
import countries from "../../data/countries.json";

const CountryState = (props) => {
  const [country, setcountry] = useState(() => {
    const storedCountry = localStorage.getItem('country');
    return storedCountry ? storedCountry : 'in';
  })

  useEffect(() => {
    localStorage.setItem('country', country);
  }, [country]);
 
  return (
    <CountryContext.Provider value={{ country, setcountry, countries }}>
      {props.children}
    </CountryContext.Provider>
  )

}
export default CountryState;