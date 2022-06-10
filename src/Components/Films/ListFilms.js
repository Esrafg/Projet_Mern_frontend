import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadFilms} from "../../Redux/actions/filmsAction.js";
import AfficheFilms from "./AfficheFilms.js";
const ListFilms=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadFilms());
 });


 return(

 <div><AfficheFilms/></div>
 )
}
export default ListFilms 
