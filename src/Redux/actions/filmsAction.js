import {GET_FILMS,DELETE_FILM,ADD_FILM,GET_SINGLE_FILM,UPDATE_FILM} from
"../../Redux/actions/reducers/types.js"
import {FilmService} from "../../services/Film-Service.js";
export const loadFilms=()=>{
 return (dispatch)=>{
 FilmService.fetchFilms()
 .then(res=>{
 dispatch({type:GET_FILMS, payload:res.data})
 }).catch((error)=>console.log(error));

 }
}
export const loadSinglefilm=(_id)=>{
 return (dispatch)=>{
 FilmService.fetchFilmById(_id)
 .then((res)=>{
 dispatch({type:GET_SINGLE_FILM,
 payload:res.data});
 }).catch((error)=>console.log(error));

 }
}
export const addfilm=(film)=>{
 return (dispatch)=>{
 FilmService.addFilm(film)
 .then((res)=>{
 dispatch({type:ADD_FILM,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const deletefilm=(_id)=>{
 return dispatch=>{
 FilmService.deleteFilm(_id)
 .then((res)=>{
 dispatch({type:DELETE_FILM, payload:_id})
 }).catch((error)=>console.log(error));

 }
}
export const updatefilm=(film)=>{
 return dispatch=>{
 FilmService.editFilm(film)
 .then((res)=>{
 dispatch({type:UPDATE_FILM,
 payload:res.data})
 }).catch((error)=>console.log(error));

 }
} 
