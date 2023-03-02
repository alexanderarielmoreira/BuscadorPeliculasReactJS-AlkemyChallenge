//Libraries; 
import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import swAlert from '@sweetalert/with-react'; 

function Resultados(){
    let query = new URLSearchParams(window.location.search); 
    let keyWord = query.get('keyWord');

    //Sirve para utilizar la información traída por useEffect(); 
    const [ moviesResults, setMoviesResults ] = useState([]); 

    useEffect( //Sirve para hacer un llamado asíncrono a la API;
        ()=> {
            const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=60175a12c66dd0881865fdc3e13f4121&language=es-ES&query=${keyWord}`;  

            axios.get(endPoint)
            .then(
                response => {
                    const moviesArray = response.data.results; 

                    if(moviesArray.length === 0){
                        swAlert(<h4>Tu búsqueda no arrojó ningún resultado.</h4>); 
                    }
                    
                    setMoviesResults(moviesArray); 
                }
            )
            .catch(error => console.log(error)) 
        }, [keyWord]); 

    return(
        <>
        <div className='bg-info'>
            <div className='container mt-1'>
                <h4>Buscaste: {keyWord}</h4>

                { moviesResults.length === 0 && <h3>No hay resultados</h3> } 

                    <div className='row'> 
                    { 
                        moviesResults.map((oneMovie, index)=>{ 
                            return( 
                                <div className='col-3' key={ index }>  
                                    <div className="card my-4" >
                                    <img className="card-img-top" src={ `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` } alt="posterDeLaPelicula" />
                                        <div className="card-body">
                                            <h5 className="card-title"> { oneMovie.title } </h5> 
                                            <Link to= { `/detalle?movieID=${ oneMovie.id }` } className="btn btn-dark"> ver detalle </Link> 
                                        </div> 
                                    </div> 
                                </div> )}) 
                        } 
                    </div>
                </div>
        </div>
        </>
    )

}

export default Resultados;

