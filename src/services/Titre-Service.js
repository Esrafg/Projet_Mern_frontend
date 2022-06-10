import Axios from "../Axios/Api";
const TITRE_API="/titres"
 const fetchTitres=async()=> {
 return await Axios.get(TITRE_API);
 }

 export const TitreService = {
 fetchTitres
 }