import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import categories from "../data/categories.json";
import CountryContext from "../context/country/CountryContext";

const NavBar = (props) => {
  const countryContext = useContext(CountryContext);
  const { country, setcountry, countries } = countryContext;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {process.env.REACT_APP_NAME}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((category) => {
              return (
                <li className="nav-item" key={category}>
                  <NavLink
                    className="nav-link"
                    to={`/${category}`}
                  >
                    {capitalizeFirstLetter(category)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <form className="d-flex">
            <select
              className="form-select bg-dark text-white"
              onChange={(e) => setcountry(e.target.value)}
              value={country}
            >
              {countries.map((country) => {
                return (
                  <option value={country} key={country}>
                    {country.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
