

import React, { useState, useEffect } from 'react';
import "./searchBar.scss"

const Searchbar = ({imdbId, searchTerm})=> {
  const [term, setTerm] = useState("")


  useEffect(() => {
    console.log("term",term)
    searchTerm(term)
  }, [term, searchTerm]);

  return (
    <div className="searchBar">
        <input type="text" placeholder="busca pirata!"  onChange={ e => setTerm(e.target.value) }/>
    </div>
  );
}

export default Searchbar;
