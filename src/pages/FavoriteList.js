import React from 'react'; 
import ListLocal from "../ListLocal/ListLocal"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">

      <div className="imgContainer">
        <img src={Logo} alt="piratex logo"/>
      </div>

      <section className="favbutton">
        <Link className="button" to="/">Go back!</Link>
      </section>
      <section className="list">
        <ListLocal/>
      </section>
    </div>
  );
}

export default Home;