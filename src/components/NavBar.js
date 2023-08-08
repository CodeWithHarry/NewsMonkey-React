import React from 'react'
import { Link } from "react-router-dom";
import categories from '../data/categories.json'
import countries from '../data/countries.json'

const NavBar = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const handleCountryChange = (event) => {
        console.log(event.target.value)
        props.setCountry(event.target.value);
    };

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {categories.map((category) => {
                                return <li className="nav-item" key={category}>
                                <Link className="nav-link" to={`/${category}`}>{capitalizeFirstLetter(category)}</Link>
                                </li>
                            })}
                        </ul>
                        <form className="d-flex">
                        <select className="form-select" onChange={handleCountryChange} value={props.country}>
                            {countries.map((country) => {
                                return <option value={country} key={country}>{country.toUpperCase()}</option>
                            })}
                        </select>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
