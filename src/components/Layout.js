import React, { useContext } from "react";
import ScrollButton from "./ScrollButton";
import NavBar from "./NavBar";
import CountryState from "../context/country/CountryState";
import ProgressContext from "../context/country/ProgressContext";
import LoadingBar from "react-top-loading-bar";

const Layout = (props) => {
  const context = useContext(ProgressContext);
  const { progress } = context;

  return (
      <CountryState>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />
        <div className="container mt-5 mb-5">
          {props.children}
          <ScrollButton />
        </div>
        <footer className="navbar fixed-bottom bg-dark text-white justify-content-center">
          Copyright © {new Date().getFullYear()} {process.env.REACT_APP_NAME}.
          All Rights Reserved.
        </footer>
      </CountryState>
  );
};

export default Layout;
