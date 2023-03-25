// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
// import Navbar from './components/Navbar';
import News from './components/News';
import {
	BrowserRouter as Router,
	Routes,
	Route
	// Link
} from 'react-router-dom';


const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
  
  
  
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
      <div>
        {/* <Navbar/> */}
        
        <Routes>
         <Route exact path="/" element={<News  setprogress={setProgress} apiKey={apiKey} key="general"  pageSize={9} country='in' category="general"/>} />
         <Route exact path="/business" element={<News  setprogress={setProgress} apiKey={apiKey} key="business"  pageSize={9} country='in' category="business"/>} />
         <Route exact path="/entertainment" element={<News  setprogress={setProgress} apiKey={apiKey} key='entertainment'  pageSize={9} country='in' category="entertainment"/>} />
         <Route exact path="/general" element={<News  setprogress={setProgress}  apiKey={apiKey} key='general' pageSize={9} country='in' category="general"/>} />
         <Route exact path="/health" element={<News  setprogress={setProgress}  apiKey={apiKey} key='health' pageSize={9} country='in' category="health"/>} />
        <Route exact path="/science" element={<News  setprogress={setProgress} apiKey={apiKey} key='science'  pageSize={9} country='in' category="science"/>} />
         <Route exact path="/sports" element={<News  setprogress={setProgress} apiKey={apiKey} key='sports'  pageSize={9} country='in' category="sports"/>} />
         <Route exact path="/technology" element={<News  setprogress={setProgress}  apiKey={apiKey} key='technology' pageSize={9} country='in' category="technology"/>} />

      </Routes>
      </div>
      </Router>
    )
  
}
export default App;
