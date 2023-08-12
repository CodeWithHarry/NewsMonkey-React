import CountryContext from "./CountryContext";
import { useState } from "react";
import countries from "../../data/countries.json";

const CountryState = (props) => {
  const [country, setcountry] = useState('in')
 
  return (
    <CountryContext.Provider value={{ country, setcountry, countries }}>
      {props.children}
    </CountryContext.Provider>
  )

}
export default CountryState;