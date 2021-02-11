import './App.css';
import Header from './components/partials/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    </div>
    </Router>
  );
}

export default App;
