import React, {useState,useEffect} from 'react'
import './App.css';

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
    <div className="App">
    <h1>React Issues</h1>
    </div>
  );
}

export default App;
