import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import {loadSinglefilm,updatefilm} from "../../Redux/actions/filmsAction";
import {loadGenres} from "../../Redux/actions/genresAction";
import {loadTitres} from "../../Redux/actions/titresAction";
import {loadDescriptions} from "../../Redux/actions/descriptionsAction";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const EditFilm=()=>{
 const [state, setState] = useState({
 isbn: "", annedition: "", prix:"",
 affichage:"",genre:"",titre:"",description:[]
 });

 const [aut, setAut] = useState([])
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const params = useParams();
 const _id=params._id;
 useEffect(() => {
 dispatch(loadSinglefilm(_id));
 dispatch(loadGenres());
 dispatch(loadTitres());
 dispatch(loadDescriptions());
 setFiles("");
 },[_id,dispatch]);

 const film = useSelector((state) => state.allfilms.film);
 const genres = useSelector((state)=>state.allgenres.genres);
 const titres = useSelector((state) =>state.alltitres.titres);
 const descriptions = useSelector((state) =>state.alldescriptions.descriptions);

 useEffect(()=>{
 setState(film);
 setFiles(film.couverture)
 },[film]);
 const handleSubmit = async(event)=> {
 event.preventDefault();
 console.log(aut)
 const f={
    isbn: isbn,
    annedition:annedition,
    prix:prix,
    affichage:affichage,
    couverture : files[0].file.name,
    titre:titre,
    genre:genre,
    description:description
    }
 dispatch(updatefilm(f));
 navigate("/films");
 }
 const handelInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value});
 }
 
 const labeldescription=()=>{
 if(state.description) {
 let ch=""
 state.description.map((aut)=>{
 if(aut.descrpfilm)
 ch = ch+aut.descrpfilm
 })
 return ch
 }
 else return null
 }
 const handleDescriptions=(event)=>{
 setState({...state,"descriptions": []});

 setAut(event.target.value);

 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl>
 <TextField name="isbn"
 variant="outlined"
label="ISBN"
value={state.isbn}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="annedition"
 variant="outlined"
label="Année"
value={state.annedition}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="prix"
 variant="outlined"
type="Number"
label="prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="affichage"
 variant="outlined"
type="Number"
label="Affichage"
value={state.affichage}
 onChange={handelInputChange}
 style={{ margin: 10}}/>


  <TextField
 name="genres"
 variant="outlined"
 select
 label={labelgenre()}
 SelectProps={{multiple: true}}
 value={aut?aut:state.genres}
 helperText="Sélectionner des genres"
 onChange={(event)=>handleGenres(event)}
 >
 {
 handleGenres ?
 listeauteurs.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.nomauteur}</MenuItem>
 )
 :null
 }
 </TextField>
 </FormControl>
 </form>

 <h4>Télécharger Image</h4>
 <FormControl>
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse
One</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default EditFilm