import { Navigate, Link } from 'react-router-dom'; 

function Favoritos(props){ 

    let token = sessionStorage.getItem('token'); 

    return( 
        <>
        { !token && <Navigate to='/' /> } 
            <div className='bg-info'>
                <div className='container mt-1'>  
                <h3> Sección Favoritos </h3> 
                    <div className='row'> 
                        { !props.favorites.length && <div className="col-12 text-danger"> <h4>No existe ningún elemento agregado a esta sección.</h4> </div> } 
                        {   /* Iteration */ 
                            props.favorites.map((oneMovie, index)=>{
                                return(
                                <>
                                    <div className='col-3' key={index}>  
                                        <div className="card my-4" >
                                            <img 
                                            src={oneMovie.imgURL}
                                            className="card-img-top"
                                            alt="posterDeLaPelicula" />
                                            <button 
                                                type="" 
                                                className="btn btn-danger favourite-btn" 
                                                onClick={ props.addOrRemoveFromFavs }  
                                                data-movie-id={ oneMovie.id } 
                                                > 🖤 </button> 
                                            <div className="card-body">
                                                <h5 className="card-title">{ oneMovie.title }</h5> 
                                                <p className="card-text">{ oneMovie.overView }</p>  
                                                <Link to= { `/detalle?movieID=${ oneMovie.id }` } className="btn btn-primary"> ver detalle </Link>
                                            </div> 
                                        </div> 
                                    </div>
                                </>)}) 
                        }  
                    </div>
                </div>
            </div>
        </>
    );
}

export default Favoritos;
