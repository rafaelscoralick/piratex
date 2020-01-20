import React from 'react'; 
import ListLocal from "../ListLocal/ListLocal"
import { Link } from "react-router-dom";
import "./page.scss";
function Home() {
  return (
    <div className="page favoriteList">
      <section className="header">
        <div>    
          <h1>FAVORITOS</h1>
          <h3>PIRATEX</h3>
        </div>
        <Link className="button" to="/">&#215;</Link>
      </section>
      <section className="list">
        <ListLocal/>
      </section>
    </div>
  );
}

export default Home;