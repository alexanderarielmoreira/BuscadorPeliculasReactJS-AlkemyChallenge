//Styles
import "../CSS/bootstrap.min.css";

function Footer(){
    return(
            <footer className="navbar navbar-expand-lg bg-body-tertiary">
                <nav className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">  
                            <li className="nav-item">
                                <p className="nav-link active"> Copyright Alkemy challenge | designed by Alexander Ariel Moreira | 2023 </p>
                            </li>   
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/in/alexander-ariel-moreira-0b866a56/" className="nav-link active fw-bold" rel="noopener noreferrer" > LinkedIn </a>
                            </li>                
                        </ul>
                    </div>  
                </nav>  
            </footer>
    );
}

export default Footer; 

