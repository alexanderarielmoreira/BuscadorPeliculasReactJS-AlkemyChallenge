//Libraries;
import axios from 'axios'; 
import swAlert from '@sweetalert/with-react'; 
import { useNavigate, Navigate } from 'react-router-dom'; 

//Styles;
import "../CSS/bootstrap.min.css";

function Login(){  

    const navigate = useNavigate();   

    const submitHandler = (e)=> { 
        e.preventDefault(); 
    
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        console.log(regexEmail.test(email));

        if(email === '' || password === ''){
            swAlert(
                <h2>Los campos no pueden estar vacios</h2>
            );
            return;
        };

        if(email !== '' && !regexEmail.test(email)){
            swAlert(
                <h2>Debes escribir una dirección de correo electrónico válida</h2>
            );
            return; 
        };

        if(email !== 'challenge@alkemy.org' || password !== 'react'){ 
            swAlert(
                <h2>Credenciales invalidas</h2>
            );
            return; 
        }

        axios 
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(
            res => {
                swAlert(<h2>Has ingresado correctamente a tu cuenta</h2>);
                
                const tokenRecibido = res.data.token; 
                sessionStorage.setItem('token', tokenRecibido);   
                navigate('/listado');  
            }
        );
    };  

    let token = sessionStorage.getItem('token'); 

    return(
        <>
            { token && <Navigate to='/listado' /> }

            <div className='bg-info'>
                <div className='bg-info d-flex justify-content-center align-items-center vh-100'>
                    <div className='bg-white p-5 rounded-5'>
                        <h2 className='text-center fs-1 fw-bold'>Login</h2>
                            <div className='input-group'>
                                <form onSubmit={submitHandler}> 
                                    <label>
                                        <span className='input-group-text bg-info fw-bold'>Correo electrónico</span>
                                        <br />
                                        <input type="text" name="email" className="form-control" />
                                    </label>
                                        <br />
                                    <label>
                                        <br/>
                                        <span className='input-group-text bg-info fw-bold'>Contraseña</span>
                                        <br />
                                        <input type="password" name="password" className="form-control"/>
                                    </label>
                                        <br />
                                        <br /> 
                                    <button type="submit" className="btn btn-dark d-grid gap-2 col-12 mx-auto">Ingresar</button> 
                                </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login; 
