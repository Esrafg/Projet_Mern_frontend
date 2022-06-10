import {GET_GENRES} from './types'
const initialState={
 genres:[]
};
const genresReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_GENRES:
 return{
 ...state,
 genres:action.payload,

 };
 default: return state
 }
}
export default genresReducers