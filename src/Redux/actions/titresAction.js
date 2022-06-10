import {GET_TITRES} from "./reducers/types"
import {TitreService} from "../../services/Titre-Service";
export const loadTitres=()=>{
 return (dispatch)=>{
 TitreService.fetchTitres()
 .then(res=>{
 dispatch({type:GET_TITRES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
