import axios from "axios";

/*
key 1 = 4b6f9272
key 2 = 511c037a
*/

const imdbAPI = "http://omdbapi.com/?apikey=4b6f9272";
 

export default async function fetchData(imdbID){

    const store = JSON.parse(sessionStorage.getItem("inCache")) || [];
    const inCache = store.find(item=>
        item.imdbID === imdbID
    );

    if(inCache){
        console.log("in cache",inCache);
        return inCache;
    }
    return axios.get(imdbAPI, {
        params: { i: imdbID } 
    }).then( (movie)=>{
        console.log("no cache", movie.data);
        sessionStorage.setItem("inCache", JSON.stringify([...store, movie.data]) )
        return movie.data
    } )
}