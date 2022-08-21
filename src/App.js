import React from 'react';
import Header from "./components/header"
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
