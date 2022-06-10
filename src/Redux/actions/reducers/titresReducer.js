import {GET_TITRES} from './types'
const initialState={
 titres:[]
};
const titresReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_TITRES:
 return{
 ...state,
 titres:action.payload,

 };
 default: return state
 }
}
export default titresReducers 