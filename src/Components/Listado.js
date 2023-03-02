//Libraries;
import axios from 'axios'; 
import { useEffect, useState } from 'react'; 
import { Link, Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react'; 

function Listado(props){  

    const [moviesList, setMoviesList] = useState([]); 

    useEffect(()=>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=60175a12c66dd0881865fdc3e13f4121&language=es-ES&page=1';  
        
        axios.get(endPoint)  
        .then(
            response => {
                const apiData = response.data;
                setMoviesList(apiData.results);  
            }   
        )
        .catch(
            error => {
                console.log(error);
                swAlert(<h3>Han ocurrido errores, intenta luego.</h3>); 
            } 
        ); 
    }, [setMoviesList]); 
    
    let token = sessionStorage.getItem('token'); 

    return(       
        <>  
        { !token && <Navigate to='/' /> } 

            <div className='bg-info'>
                <div className='container mt-1'>  
                    <div className='row'>   
                        {   /* Iteración de la 'card' para mostrar las películas */ 
                            moviesList.map((oneMovie, index)=>{
                                return (
                                <>
                                    <div className='col-3' key={index}>  
                                        <div className="card my-4" >
                                            <img className="card-img-top" src={ `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` } alt="posterDeLaPelicula" />
                                            <button 
                                                type="" 
                                                className="btn btn-danger favourite-btn" 
                                                onClick={ props.addOrRemoveFromFavs }
                                                data-movie-id={ oneMovie.id } 
                                                > 🖤 </button>
                                            <div className="card-body">
                                                <h5 className="card-title"> { oneMovie.title } </h5> 
                                                <p className="card-text"> { oneMovie.overview.substring(0, 100) }...</p>
                                                <Link to= { `/detalle?movieID=${ oneMovie.id }` } className="btn btn-primary"> ver detalle </Link> 
                                            </div> 
                                        </div> 
                                    </div>
                                </> )}) 
                        }; 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado; 