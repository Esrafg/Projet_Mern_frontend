import Axios from "../Axios/Api";
const GENRE_API="/genres"
 const fetchGenres=async()=> {
 return await Axios.get(GENRE_API);
 }

 export const GenreService = {
    fetchGenres
 } 