

import React, { useState, useEffect } from 'react';
import { getMovie } from "./services/api" 

function App() {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    getMovie().then( function(movie){
      setMovies( movie )
    })
  });



  return (
    <div className="App">
      {movies.map((movie,key)=> (<p key={key}>{movie.Title}</p>) )}
    </div>
  );
}

export default App;
