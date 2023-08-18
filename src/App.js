import React from "react";
import Layout from "./components/Layout";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import categories from "./data/categories.json";
import ProgressState from "./context/country/ProgressState";

const App = () => {
  const pageSize = 9;  
  return (
    <ProgressState>
    <Layout>      
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
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
                  key={category}
                  pageSize={pageSize}
                  category={category}
                />
              }
            />
          );
        })}
      </Routes>
    </Layout>
    </ProgressState>
  );
};

export default App;
