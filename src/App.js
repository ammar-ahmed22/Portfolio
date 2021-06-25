import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from 'react';


import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';


function App() {

  
  var [darkMode, setDarkMode] = useState();
  console.log(darkMode);
  return (
    <Router>
      <div className="page-body bg-dark">
        
          <Switch>
            <Route path="/" render={(props)=>{
              return <HomePage {...props} darkMode={darkMode} setDarkMode={setDarkMode}/>
            }} exact/>
            <Route path="/:name" render={(props)=>{
              return <ProjectPage {...props} darkMode={darkMode} setDarkMode={setDarkMode}/>
            }} />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
