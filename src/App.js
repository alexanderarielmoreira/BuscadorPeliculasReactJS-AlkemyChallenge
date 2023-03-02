//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 
import Details from "./Components/Details";
import Login from "./Components/Login";
import Listado from "./Components/Listado"; 
import Buscador from "./Components/Buscador";
import Resultados from "./Components/Resultados";
import Favoritos from "./Components/Favoritos";  

//Libraries
import { Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from "react"; 

//Styles
import './CSS/bootstrap.min.css';
import './CSS/app.css'; 

function App() {

  const [favorites, setFavorites] = useState([]); 
 
  useEffect( ()=>{ 
    const favsInLocal = localStorage.getItem('favs');     
    if(favsInLocal !== null){
      const favsArray = JSON.parse(favsInLocal); 
      setFavorites(favsArray); 
    }
    }, []);

  const favsMovies = localStorage.getItem('favs'); 

  let tempMoviesInFavs; 
  
  if(favsMovies === null){
    tempMoviesInFavs = []; 
  } else {
    tempMoviesInFavs = JSON.parse(favsMovies); 
  };

  const addOrRemoveFromFavs = e => {
    const btn = e.currentTarget; 
    const parent = btn.parentElement;  
    const imgURL = parent.querySelector('img').getAttribute('src'); 
    const title = parent.querySelector('h5').innerText;  
    const overview = parent.querySelector('p').innerText;  
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId 
    }  

    let movieIsInArray = tempMoviesInFavs.find(
      (oneMovie)=>{
        return oneMovie.id === movieData.id 
      });

    if(!movieIsInArray){ 
      tempMoviesInFavs.push(movieData); 
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);    
      console.log('Se agregó la pelicula'); 
    } else {
      let moviesLeft = tempMoviesInFavs.filter(
        (oneMovie)=>{
          return oneMovie.id !== movieData.id 
        }); 
        localStorage.setItem('favs', JSON.stringify(moviesLeft));
        setFavorites(moviesLeft);   
        console.log('Se eliminó la película'); 
    }; 
    
  }; 

  return (
    <> 
      <Header favorites={favorites}/>     
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route path="/listado" element={ <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} /> } /> 
          <Route path="/detalle" element={ <Details /> } /> 
          <Route path="/buscador" element={ <Buscador /> } />
          <Route path="/resultados" element={ <Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} /> } /> 
          <Route path="/favoritos" element={ <Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/> } /> 
        </Routes>
      <Footer />
    </>
  );
}

export default App;

/* 

1) Renderizar condicionalmente (Header & Footer) solo si el user is log in! || ¿Ver cómo? -> 'shurt cut circuit' o 'renderizado condicional'; 

2) Cómo pasar props en React Router dom v6 || 
react router dom v6 passing props -> https://www.youtube.com/watch?v=LYlGH1rzyS4 

*/