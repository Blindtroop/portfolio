import React from 'react';
import './App.css';
import DynamicText from './components/dynamic-text';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles-js" /> 
      <header className="App-header">
        <h2>Lance Kaluhi</h2>
        <DynamicText /> 
        <p>Portfolio Coming Soon...</p>
        
      </header>
      
    </div>
  );
}

export default App;
