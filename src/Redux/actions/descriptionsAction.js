import {GET_DESCRIPTIONS} from "./reducers/types.js"
import {DescriptionService} from "../../services/Description-Service";
export const loadDescriptions=()=>{
 return (dispatch)=>{
 DescriptionService.fetchDescriptions()
 .then(res=>{
 dispatch({type:GET_DESCRIPTIONS,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}