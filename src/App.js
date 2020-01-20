import React, { useState, useEffect } from 'react'; 
import fetchData from "./services/movieListApi"
import Card from './card';
import SearchBar from './SearchBar';
import Logo from "./assets/logo.png"
import favIcon from "./assets/fav.svg"

function App() {
  const [searchTerm, setSearchTerm ] = useState("")
  const [movies, setMovies] = useState([]);

  const fetch = ()=>{
    fetchData(searchTerm).then( function(movie){
      setMovies( movie )
    })
  }

  useEffect(() => {
    fetch();
  }, [searchTerm]);

  return (
    <div className="App">

      <div className="imgContainer">
        <img src={Logo} alt="piratex logo"/>
      </div>
      
      <SearchBar searchTerm={(text)=>setSearchTerm(text)}/>
      <section className="favbutton">
        <button><img src={favIcon} alt="fav icon"/>favoritos</button>
      </section>
      <section className="list">
        { movies.length ? 
          movies.map( (movie,key) => (<Card key={key} imdbId={movie.imdbID}/>) )  : 
          <p className="failFilmList">nenhum filme encontrado =( </p> 
        }
      </section>
    </div>
  );
}

export default App;