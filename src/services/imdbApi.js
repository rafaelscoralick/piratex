import axios from "axios";

const imdbAPI = "http://omdbapi.com/?apikey=511c037a";
 

export default async function fetchData(imdbID){

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