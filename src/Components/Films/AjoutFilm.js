import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addfilm} from "../../Redux/actions/filmsAction";
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
const AjoutFilm=()=>{
 const [isbn, setIsbn] = useState("");
 const [annedition, setAnnedition] = useState("");
 const [prix, setPrix] = useState("");
 const [affichage, setAffichage] = useState("");
 const [genre, setGenre] = useState("");
 const [titre, setTitre] = useState("");
 const [description, setDescription] = useState([]);
 const [files, setFiles] = useState("")
 const dispatch = useDispatch();
 const navigate = useNavigate();
 useEffect(() => {
 dispatch(loadGenres());
 dispatch(loadTitres());
 dispatch(loadDescriptions());
 },[dispatch]);
 const genres = useSelector((state)=>state.allgenres.genres);
 const titres = useSelector((state) =>state.alltitres.titres);
 const descriptions = useSelector((state) =>state.alldescriptions.descriptions);

 const handleSubmit = async(event)=> {
 event.preventDefault();
 const f={
 isbn: isbn,
 annedition:annedition,
 prix:prix,
 affichage:affichage,
 couverture : files[0].file.name,
 titre:titre,
 genre:genre,
 description:description
 };
 dispatch(addfilm(f));
 navigate("/films");
 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button variant="contained"
onClick={(event)=>handleSubmit(event)}>Ajout</Button>
 </div>
 <FormControl>
 <TextField
 variant="outlined"
label="ISBN"
value={isbn}
 onChange={e => setIsbn(e.target.value)}
 required />
 
 <TextField
 variant="outlined"
type="Number"
label="Année"
value={annedition}
 onChange={e => setAnnedition(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Prix"
value={prix}
 onChange={e => setPrix(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Affichage"
value={affichage}
 onChange={e => setAffichage(e.target.value)}
 />
 
 <TextField
 variant="outlined"
 select
 label="Titre"
 value={titre}
 helperText="Sélectionner un titre"
 onChange={e => setTitre(e.target.value)}
 >
 {
 titres ?
 titres.map((p)=>
 <MenuItem key={p._id}
value={p._id}>{p.nomfilm}</MenuItem>
 )
 :null
 }
 </TextField>

 <TextField
 variant="outlined"
 select
 label="Genre"
 value={genre}
 helperText="Sélectionner un genre"
 onChange={e => setGenre(e.target.value)}
 >
 {
 genres ?
 genres.map((g)=>
 <MenuItem key={g._id}
value={g._id}>{g.genrefilm}</MenuItem>
 )
 :null
 }
 </TextField>

 <TextField
 variant="outlined"
 select
 label="Description"
 value={description}
 helperText="Sélectionner un genre"
 onChange={e => setDescription(e.target.value)}
 >
 {
 descriptions ?
 descriptions.map((d)=>
 <MenuItem key={d._id}
value={d._id}>{d.descrpfilm}</MenuItem>
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
 labelIdle='<span class="filepond--label-action">BrowseOne</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default AjoutFilm
