import React, { useState } from 'react'; 
import SearchBar from '../SearchBar/SearchBar';
import List from "../List/List"
import Logo from "../assets/logo.png"
import favIcon from "../assets/fav.svg"
import { Link } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm ] = useState("")

  return (
    <div className="Home">

      <div className="imgContainer">
        <img src={Logo} alt="piratex logo"/>
      </div>
      
      <SearchBar searchTerm={(text)=>setSearchTerm(text)}/>
      <section className="favbutton">
        <Link className="button" to="/favorite-list"><img src={favIcon} alt="fav icon"/>favoritos</Link>
      </section>
      <section className="list">
        <List searchTerm={searchTerm}/>
      </section>
    </div>
  );
}

export default Home;