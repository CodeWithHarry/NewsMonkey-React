import React from "react";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
const NavBar = () => {
  const linkStyle = {
    color: "#643b14",
    fontFamily: "Arial, Helvetica, sans-serif",
  };
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen((state) => !state);
  }

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg "
        style={{ background: "#FFDEA9" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            style={linkStyle}
            to="/"
            onClick={toggleNav}
          >
            <FaRegNewspaper />
            NewsMonkey
          </Link>
          <button
            onClick={toggleNav}
            className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={linkStyle}
          >
            <span style={linkStyle}>
              <CiMenuBurger />
            </span>
          </button>
          <div
            className={
              navOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={linkStyle}
                  aria-current="page"
                  to="/"
                  onClick={toggleNav}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/business"
                  data-bs-toggle="collapse"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNav}
                  style={linkStyle}
                  className="nav-link"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
