import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import categories from './data/categories.json'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)  
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />      
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general"/></Route> 
        {categories.map((category) => {            
            return <Route exact path={`/${category}`} key={category}>
                <News setProgress={setProgress} apiKey={apiKey} key={category} pageSize={pageSize} country="in" category={category}/>
              </Route> 
        })}
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;