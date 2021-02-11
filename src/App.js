import React, {useState,useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Issues from './components/pages/Issues'
import ShowIssue from './components/pages/ShowIssue'

function App() {
  const [issues,setIssues] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(response => response.json())
    .then(rdata =>{
      setIssues(rdata)
    })
  },[])

  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/issues' render={() => <Issues issues={issues} />} />
      <Route path='/issues/:id' render={(props) => <ShowIssue {...props} issues={issues} /> } />
    </div>
    </Router>
  );
}

export default App;
