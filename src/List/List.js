import React, { useEffect,  useState } from 'react';
import fetchData from "../services/movieListApi"
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../Card/Card';
import "./List.scss";

function List({ searchTerm }) {
    const [page, setPage] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const [items, setItems] = useState([]);
    
    const fetchPagination = (searchTerm, page) => {
        setLoaded(false);
        fetchData(searchTerm, page).then(function (item) {
            setItems([...items,...item]);
            setLoaded(true);
        })
    }
    
    const fetch = (searchTerm) => {
        setLoaded(false);
        fetchData(searchTerm, 0).then(function (item) {
            setItems(item);
            setLoaded(true);
        })
    }

    useEffect(() => {
        fetchPagination(searchTerm, page);
    }, [searchTerm, page]);

    useEffect(() => {
        setPage( 0 )
        fetch(searchTerm)
    }, [searchTerm]);

    function loadFunc(){
        if(loaded){
            setPage( page +1);
        }
    }
    
  return (

    <InfiniteScroll
        className="list"
        pageStart={ page }
        loadMore={ loadFunc }
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
        { items.length ? 
          items.map( (item,key) => (<Card key={key} imdbId={item.imdbID}/>) )  : 
          <p className="failFilmList">nenhum filme encontrado =( </p> 
        }
    </InfiniteScroll>
  );
}

export default List;
