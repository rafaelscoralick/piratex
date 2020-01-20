

import React, { useState, useEffect } from 'react';
import { isFav, setFavo } from "../services/favApi" 
import fetchData from "../services/imdbApi"
import "./card.scss"
import favIcon from "../assets/fav.svg"
import favIconActive from "../assets/fav-active.svg"
import notfound from "../assets/notfound.png";
import notfoundDesktop from "../assets/notfound-desktop.png";

const Card = ({imdbId})=> {
  const [fav, setFav] = useState(false)

  const [movie, setMovie] = useState({
        Title: ""
  });

  useEffect(() => {
    const f = isFav(imdbId);
    setFav(f)
  }, [imdbId]);

  useEffect(() => {
    setFavo(imdbId, fav)
  }, [fav, imdbId]);

  useEffect(() => {
    fetchData(imdbId).then(function(m){
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
      <a href={`https://www.imdb.com/title/${imdbId}`}>
        <div className="imgContainer">
          <img src={ movie.Poster !== "N/A" ? movie.Poster : notfoundDesktop } alt='poster do filme'/>
        </div>
      </a>
      <span className='info'>
        <div className='data'>
            <h3>{ title(movie.Title) }</h3>
            <p>{movie.Year}</p>
        </div>
        <button onClick={()=>setFav(!fav)}><img src={ fav ? favIconActive : favIcon } alt="favoritar" /></button>
      </span>
      
    </div>
  );
}

export default Card;
