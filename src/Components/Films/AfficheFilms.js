import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useDispatch,useSelector} from "react-redux";
import {deletefilm} from "../../Redux/actions/filmsAction";
import { Link, useNavigate } from 'react-router-dom'; 
const AfficheFilms=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete=(id)=>{
    if(window.confirm("supprimer la catégorie O/N")) {
    dispatch(deletefilm(id));
    navigate("/films"); 
}
}
 const films = useSelector((state) =>state.allfilms.films);
 return(
 <>
 <br/>
 <Button variant="contained" color="success" size="large">
 <Link to={"/addFilms/"}
style={{"textDecoration":"none","color":"white"}}>
 Ajout
 </Link>
 </Button>
 <Grid container spacing={2} columns={15} marginTop={10}>

 {films?films.map((row) => (
 <Grid item xs={5} key={row._id}>
 <Card sx={{ maxWidth: 250 }} key={row._id}>
 <CardMedia
 component="img"
 height={230}
 image={"images/"+row.couverture}
 alt={row.nomfilm}
 />
 <CardContent>
 
 <Typography gutterBottom variant="h4" component="div"> {row.titre.nomfilm}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {row.prix} TND
 </Typography>
 
 </CardContent>
 <CardActions>
 <Link to={"/editFilms/" + row._id}
style={{"textDecoration":"none","color":"white"}}> <Button variant="contained"
color="primary" size="small">Modifier</Button></Link>
 <Button variant="contained" color="error" size="small"
onClick={()=>handleDelete(row._id)} >Supprimer</Button>
 </CardActions>
 </Card>
 </Grid>
 )
 ):null
 }
 </Grid>
 </>
 )
 }
export default AfficheFilms
