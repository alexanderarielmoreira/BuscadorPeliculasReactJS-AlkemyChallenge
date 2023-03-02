import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import swAlert from '@sweetalert/with-react';


function Details(){

    let token = sessionStorage.getItem('token'); 

    let query = new URLSearchParams(window.location.search); 
    let movieID = query.get('movieID'); 

    const [movie, setMovie] = useState(null); 

    //Para llamar a la API; Siempre poner [] al final!!!  
    useEffect( 
        ()=>{ 
            const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=60175a12c66dd0881865fdc3e13f4121&language=es-ES`;   
 
            axios.get(endPoint)
            .then(
                response => {
                    const movieData = response.data;  
                    setMovie(movieData); 
                }
            )
            .catch(
                error => {
                    console.log(error);
                    swAlert(
                        <h3>Han ocurrido errores, intenta luego.</h3>
                    );
                }
            ); 

        }, [movieID]);  

    //Trabajar con el 'estado' (con la información traída desde la API);
    useState(

    );

    return( 
            <>
            { !token && <Navigate to='/' /> } 

            { !movie && <p>Cargando...</p>  /* Reemplazar esto por componente Spinner */ } 
                { movie && 
                <>
                <div className='bg-info'>
                    <div className='container mt-3'>
                        <br/>
                        <h2> {movie.title} </h2>
                        <div className='row'>
                            <div className='col-4'>
                                <img className="img-fluid" src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt="moviePoster" />
                            </div>
                            <br/>
                            <div className='col-8'>
                                <h5> {movie.realease_date} </h5>
                                <h5>Reseña:</h5>
                                <p> {movie.overview} </p> 
                                <h5>Rating: {movie.vote_average} </h5> 
                                <ul>
                                    { movie.genres.map( oneGenre => <li key={ oneGenre.id }> { oneGenre.name } </li>) } 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </> }
            </>
        )
}; 

export default Details; 