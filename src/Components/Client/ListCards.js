import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadFilms} from "../../Redux/actions/filmsAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadFilms());
 });


 return(

 <div><AfficheCards/></div>
 )
}
export default ListCards