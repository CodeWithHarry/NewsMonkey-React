import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import categories from "./data/categories.json";
import CountryState from "./context/country/CountryState";

const App = () => {
  const pageSize = 9;  
  const [progress, setProgress] = useState(0);
  return (
    <CountryState>
      <NavBar>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}                
                key="home"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          {categories.map((category) => {
            return (
              <Route
                exact
                path={`/${category}`}
                key={category}
                element={
                  <News
                    setProgress={setProgress}                    
                    key={category}
                    pageSize={pageSize}
                    category={category}
                  />
                }
              />
            );
          })}
        </Routes>
      </NavBar>
    </CountryState>
  );
};

export default App;
