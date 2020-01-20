

import React, { useState, useEffect } from 'react';
import { isFav, setFavo } from "../services/favApi" 
import fetchData from "../services/imdbApi"
import "./card.scss"
import favIcon from "../assets/fav.svg"
import favIconActive from "../assets/fav-active.svg"
import notfound from "../assets/notfound.png";


const Card = ({imdbId})=> {
  const [fav, setFav] = useState(false)

  const [movie, setMovie] = useState({
        Title: ""
  });


  useEffect(() => {
    setFavo(imdbId, fav)
  }, [fav, imdbId]);


  useEffect(() => {
    const f = isFav(imdbId);
    
    setFav(f)

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
      <div className="imgContainer">
        <img src={ movie.Poster !== "N/A" ? movie.Poster : notfound } alt='poster do filme'/>
      </div>
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
