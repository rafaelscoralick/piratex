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
        console.log("in cache");
        
        return inCache;
    }
    console.log("no cache");
    return axios.get(imdbAPI, {
        params: { i: imdbID } 
    }).then( (movie)=>{
        sessionStorage.setItem("inCache", JSON.stringify([...store, movie.data]) )
        return movie.data
    } )
}