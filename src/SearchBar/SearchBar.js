

import React, { useState, useEffect } from 'react';
import debounce from './debounce';
import "./searchBar.scss"


const Searchbar = ({ searchTerm })=> {
  const [term, setTerm] = useState("")
  let debounced  = debounce( term, 500)

  useEffect(() => {
    searchTerm(debounced)
  }, [debounced, searchTerm]);

  return (
    <div className="searchBar">
        <input type="text" placeholder="busca pirata!"  onChange={ e => setTerm(e.target.value) }/>
    </div>
  );
}

export default Searchbar;
