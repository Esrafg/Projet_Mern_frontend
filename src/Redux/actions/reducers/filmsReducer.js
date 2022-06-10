import {GET_FILMS,DELETE_FILM,ADD_FILM,GET_SINGLE_FILM,UPDATE_FILM} from
"../reducers/types.js";

const initialState={
 films:[],
 film:{}
};
const filmsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_FILMS:
 return{
 ...state,
 films:action.payload,

 };
 case ADD_FILM:
 return{
 ...state,
films : [...state.films, action.payload],
 film:action.payload
 };
 case DELETE_FILM:
 return{
 ...state,
 films: state.films.filter(film=> film._id !==
action.payload)
 };
 case UPDATE_FILM:
 return {
 ...state,
films:state.films.map(film => film._id ===
action.payload._id ? (film = action.payload) : film)
 };
 case GET_SINGLE_FILM:
 return { ...state,
 film:action.payload };
 default: return state
 }
}
export default filmsReducers 
