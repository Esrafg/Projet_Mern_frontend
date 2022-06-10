import Axios from "../Axios/Api";
const DESCRIPTION_API="/descriptions"
 const fetchDescriptions=async()=> {
 return await Axios.get(DESCRIPTION_API);
 }
 export const DescriptionService = {
    fetchDescriptions
    } 