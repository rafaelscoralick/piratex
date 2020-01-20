import axios from "axios";

const baseUrl = "https://jsonmock.hackerrank.com/api/movies/search/";
 
export default async function fetchData(search = ""){
    return axios.get(baseUrl, {
        params: { Title: search } 
    }).then( (movies)=>{
        return movies.data.data
    } )
}