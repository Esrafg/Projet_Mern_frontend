import { GET_DESCRIPTIONS } from "./types";
const initialState={
 descriptions:[]
};
const descriptionsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_DESCRIPTIONS:
 return{
 ...state,
 descriptions:action.payload,

 };
 default: return state
 }
}
export default descriptionsReducers 