import React, { useEffect,  useState } from 'react';
import Card from '../Card/Card';
import "./ListLocal.scss";
import { favList }  from "../services/favApi";

function ListLocal() {

    const [items, setItems] = useState([]);
    
    const fetchPagination = () => {
        setItems( favList() );
    }

    useEffect(() => {
        fetchPagination();
    }, []);

    
  return (

    <div className="ListLocal">
        { items.length ? 
          items.map( (item,key) => (<Card key={key} imdbId={item.imdbID}/>) )  : 
          <p className="failFilmList">nenhum filme encontrado =( </p> 
        }
    </div>
  );
}

export default ListLocal;
