import axios from "axios";

const baseUrl = "https://jsonmock.hackerrank.com/api/movies/search/";
//const imdbAPI = "http://omdbapi.com/?apikey=511c037a";


// export default async (search:string)=>{
//     return axios.get(baseUrl, {
//         Title: search
//     });
// } 

export async function getMovie(search:string = ""){
    return axios.get(baseUrl, {
        params: { Title: search } 
    }).then( (movies)=>{
        return movies.data.data
    } )
}

// export async function getMovie(search:string){
//     let texto: Array<any> = [];
//     await axios.get(urlMaster+`/wp-json/wp/v2/menu`).then(res => {
//         res.data.map((item, key)=> texto.push({
//             key: key,
//             image: item.meta_box.logo[0].full_url
//         }));
//         return texto;
//     });
// }