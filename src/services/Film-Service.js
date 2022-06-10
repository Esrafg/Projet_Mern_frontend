import Axios from "../Axios/Api.js";
const FILM_API="/films"
 const fetchFilms=async()=> {
 return await Axios.get(FILM_API);
 }
 const fetchFilmById=async(filmId)=> {
 return await Axios.get(FILM_API + '/' + filmId);
 }
 const deleteFilm=async(filmId) =>{
 return await Axios.delete(FILM_API + '/' + filmId);
 }
 const addFilm=async(film)=> {
 return await Axios.post(FILM_API, film);

 }
 const editFilm=(film) =>{
 return Axios.put(FILM_API + '/' + film._id, film);

 }

 export const FilmService = {
    fetchFilms,
    fetchFilmById,
    deleteFilm,
    addFilm,
    editFilm
 } 
