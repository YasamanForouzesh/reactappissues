import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './components/partials/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

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
    </div>
    </Router>
  );
}

export default App;
