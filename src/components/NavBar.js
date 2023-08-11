import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import categories from "../data/categories.json";
import countries from "../data/countries.json";
import ScrollButton from "./ScrollButton";

const NavBar = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCountryChange = (event) => {
    props.setCountry(event.target.value);
  };

  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {process.env.REACT_APP_NAME}
          </Link>
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
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" + category ? "active" : ""
                      }`}
                      to={`/${category}`}
                    >
                      {capitalizeFirstLetter(category)}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form className="d-flex">
              <select
                className="form-select"
                onChange={handleCountryChange}
                value={props.country}
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
      <div className="container mt-5 mb-5">
        {props.children}
        <ScrollButton />
      </div>
      <footer className="navbar fixed-bottom bg-dark text-white justify-content-center">
          Copyright © {(new Date()).getFullYear()} {process.env.REACT_APP_NAME}. All Rights Reserved.
      </footer>
    </>
  );
};

export default NavBar;
