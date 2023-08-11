import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import categories from './data/categories.json'

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [country, setCountry] = useState('in')
 
    return (
      <div>
        <Router>
        <NavBar setCountry={setCountry} country={country}>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />      
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country={country} category="general"/></Route> 
        {categories.map((category) => {
            return <Route exact path={`/${category}`} key={category+country}>
                <News setProgress={setProgress} apiKey={apiKey} key={category} pageSize={pageSize} country={country} category={category}/>
              </Route> 
        })}
        </Switch>
        </NavBar>
        </Router>
      </div>
    )
 
}

export default App;