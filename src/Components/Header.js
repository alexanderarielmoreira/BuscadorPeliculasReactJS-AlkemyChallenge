//Components; 
import Navbar from "./Navbar";

function Header(props) {

    return(
        <> 
            <Navbar />
            <ul> 
                <li className="nav-item d-flex align-items-center"> 
                    <span className="text-succes">
                        { 
                        props.favorites.length > 0 && <><h6>Películas en Favoritos: { props.favorites.length }</h6></> 
                        }
                         
                    </span> 
                </li>
            </ul>
        </>
    );
}

export default Header;

