

import React, { useState, useEffect } from 'react';
import { getMovieList } from "./services/api" 
import Card from './card';

function App() {

  const [movies, setMovies] = useState([]);

  const fetch = ()=>{
    getMovieList().then( function(movie){
      setMovies( movie )
    })
  }

  useEffect(() => {
    fetch();
  }, []);



  return (
    <div className="App">
      { movies.map((movie,key)=> (<Card key={key} imdbId={movie.imdbID}/>) )}
    </div>
  );
}

export default App;
