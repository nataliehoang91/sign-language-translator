import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import TextDisplay from './components/TextDisplay'
import WebcamDisplay from './components/WebcamArea'
import Title from './components/Description'

function App() {
  return (
    <div className="container">
      <Navigation />
      <Title/>
      <div>
        <TextDisplay />

      </div>
      <div>
      <WebcamDisplay/>
      </div>
    </div>
  );
}

export default App;
