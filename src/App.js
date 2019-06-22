import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import TextDisplay from './components/TextDisplay'
import WebcamDisplay from './components/WebcamArea'

function App() {
  return (
    <div className="container">
      <Navigation />
      <div className="py-5">
        <TextDisplay />

      </div>
      <div>
      <WebcamDisplay/>
      </div>
    </div>
  );
}

export default App;
