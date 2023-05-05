import React from "react";
// import React{useState} from React;
import logo1 from './logo1.png';
import './App.css';
import { useState } from 'react';

function App() {
const[thisForm, setthisForm] = useState("login")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
      </header>

      <Dashboard />
      <Login />
    </div>
  );
}

export default App;
