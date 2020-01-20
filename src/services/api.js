import axios from "axios";

const baseUrl = "https://jsonmock.hackerrank.com/api/movies/search/";
const imdbAPI = "http://omdbapi.com/?apikey=511c037a";
 
export async function getMovieList(search = ""){
    return axios.get(baseUrl, {
        params: { Title: search } 
    }).then( (movies)=>{
        return movies.data.data
    } )
}

export async function getMovie(imdbID){

    const store = JSON.parse(sessionStorage.getItem("inCache")) || [];
    const inCache = store.find(item=>
        item.imdbID === imdbID
    );

    if(inCache){
        //console.log("in cache",inCache);
        return inCache;
    }
    return axios.get(imdbAPI, {
        params: { i: imdbID } 
    }).then( (movie)=>{
        //console.log("no cache", movie.data);
        sessionStorage.setItem("inCache", JSON.stringify([...store, movie.data]) )
        return movie.data
    } )
}

export function isFav(imdbID){
    const store = JSON.parse(sessionStorage.getItem("isFav")) || [];
    const fav = store.find(item=>
        item.imdbID === imdbID
    );

    if(fav){
        return fav.isFav;
    }
    return false;
}

export function setFavo(imdbID, estado){
    const store = JSON.parse(sessionStorage.getItem("isFav")) || [];
    let fav = store.find(item=>
        item.imdbID === imdbID
    );
    
    if(!fav){
        fav = {              
            imdbID: imdbID,
            isFav : estado  
        }
        store.push(fav)
    }
    fav.isFav = estado;
    sessionStorage.setItem("isFav", JSON.stringify([...store]) )
}