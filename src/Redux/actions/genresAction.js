import {GET_GENRES} from "./reducers/types.js";
import {GenreService} from "../../services/Genre-Service";
export const loadGenres=()=>{
 return (dispatch)=>{
    GenreService.fetchGenres()
 .then(res=>{
 dispatch({type:GET_GENRES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 