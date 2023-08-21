import React from "react";
import ScrollButton from "./ScrollButton";
import NavBar from "./NavBar";
import CountryState from "../context/country/CountryState";

const Layout = (props) => {
  return (
    <CountryState>
      <NavBar />
      <div className="container mt-5 mb-5">
        {props.children}
        <ScrollButton />
      </div>
      <footer className="navbar fixed-bottom bg-dark text-white justify-content-center">
        Copyright © {new Date().getFullYear()} {process.env.REACT_APP_NAME}. All
        Rights Reserved.
      </footer>
    </CountryState>
  );
};

export default Layout;
