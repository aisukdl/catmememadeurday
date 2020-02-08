import React, {useEffect, useState} from 'react';
import './App.css';
import apikey from './apiKey'

function App() {
  const [pic, setPic] = useState();
  const randomCat = () => {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=cat`)
      .then(res => res.json())
      .then(json => setPic(json.data.image_original_url))
  }
  useEffect(randomCat, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Cat</h1>
        <h1>meme</h1>
        <h1>will</h1>
        <h1>made</h1>
        <h1>your</h1>
        <h1>day</h1>
      </div>
      <div className="cat">
        <img src={pic} alt="cat-meme" />
      </div>
      <div className="button">
        <button onClick={randomCat}>GIMME ANOTHER!</button>
      </div>
      <div className="footer">
        <p>Powered By GIPHY | &copy; Copyright 2020, aisukdl.</p>
      </div>
    </div>
  );
}

export default App;
