//Components
import Buscador from "./Buscador";

//Libraries
import { Link } from "react-router-dom";

//Styles
import "../CSS/bootstrap.min.css";
import logo from '../assets/img/logo-movie.png'; 

function Navbar(){ 

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/listado'>
                        <img src={ logo } alt="logo-nav bar" width='80'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to='/'> <h4>Home</h4> </Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to='/listado'> <h4>Listado</h4> </Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to='/favoritos'> <h4>Favoritos</h4> </Link> 
                            </li> 
                        </ul> 
                    </div>
                    <Buscador/> 
                </div>
            </nav>
        </>
    );
}

export default Navbar; 