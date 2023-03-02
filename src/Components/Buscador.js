import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom'; 

function Buscador(){

    const navigate = useNavigate(); 

    const submitHandler = (e)=>{
        e.preventDefault(); 
        const keyWord = e.currentTarget.keyWord.value.trim(); 
        //console.log(keyWord);  
        
        if(keyWord.length === 0){
            swAlert( 
                <h5>Escribe una palabra clave.</h5> 
            );
        } else if(keyWord.length < 4){
            swAlert(
                <h5>La palabra clave debe tener 4 o más caracteres.</h5> 
            );
        } else {
            e.currentTarget.keyWord.value = ''; 
            navigate(`/resultados?keyWord=${ keyWord }`); 
        }; 
    } 

    return( 
        <>   
            <form className="d-flex" role="search" onSubmit={ submitHandler }>
                <input className="form-control me-2" name="keyWord" type="search" placeholder="Palabra clave" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">buscar</button> 
            </form> 
        </>
    )
}

export default Buscador;

