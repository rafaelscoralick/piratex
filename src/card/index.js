

import React, { useState, useEffect } from 'react';
import { getMovie } from "../services/api" 
import "./card.scss"
import fav from "../assets/fav.svg"
import favActive from "../assets/fav-active.svg"


const Card = ({imdbId})=> {

  const [movie, setMovie] = useState({
        Title: ""
  });

  useEffect(() => {
    getMovie(imdbId).then(function(m){
        setMovie( m )
    })
  }, [imdbId]);

  const title = (text)=>{
    const max = 30;
    if(text.length > max){
        return  text.substring(0, max-3) + '...';
    }
    return text
  }



  return (
    <div className="card">
      <div className="imgContainer">
        <img src={ movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150" } alt='poster do filme'/>
      </div>
      <span className='info'>
        <div className='data'>
            <h3>{ title(movie.Title) }</h3>
            <p>{movie.Year}</p>
        </div>
        <button onClick={()=>alert("favoritado")}><img src={ true ? fav : favActive } alt="favoritar" /></button>
      </span>
    </div>
  );
}

export default Card;
