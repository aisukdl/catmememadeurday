import React, {useEffect, useState} from 'react';
import './App.css';
import apikey from './apiKey'

function App() {
  const [pic, setPic] = useState();
  const randomCat = () => {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=cat`)
      .then(res => res.json())
      .then(json => setPic(json.data.image_original_url))
  }, []);

  return (
    <div className="App">
      <h1>Cat</h1>
      <h1>meme</h1>
      <h1>will</h1>
      <h1>made</h1>
      <h1>your</h1>
      <h1>day</h1>
      <img src={pic} alt="" />
      <br/>
      <button>GIMME ANOTHER!</button>
    </div>
  );
}

export default App;
