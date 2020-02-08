import React from 'react';
import './App.css';
import cat from './cat.jpg'

function App() {
  return (
    <div className="App">
      <h1>Cat</h1>
      <h1>meme</h1>
      <h1>will</h1>
      <h1>made</h1>
      <h1>your</h1>
      <h1>day</h1>
      <img src={cat} alt="" />
      <br/>
      <button>GIMME ANOTHER!</button>
    </div>
  );
}

export default App;
