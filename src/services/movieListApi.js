import axios from "axios";

const baseUrl = "https://jsonmock.hackerrank.com/api/movies/search/";
 
export default async function fetchData(search = "", page){
    return axios.get(baseUrl, {
        params: { 
            Title: search,
            page: page,
            per_page: 10
    } 
    }).then( (movies)=>{
        return movies.data.data
    } )
}