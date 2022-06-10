import { combineReducers } from "redux";
import filmsReducers from "./filmsReducer.js";
import genresReducers from "./genresReducer";
import titresReducers from "./titresReducer";
import descriptionsReducers from "./descriptionsReducer"; 

const rootReducer= combineReducers({
 allfilms:filmsReducers,
 allgenres:genresReducers,
 alltitres:titresReducers,
 alldescriptions:descriptionsReducers, 

});
export default rootReducer