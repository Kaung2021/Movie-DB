import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movielist from './Movielist';
import './App.css';
import Headind from './Headind';
import SearchMovies from './SearchMovies';
import Favourite from './Favourite';
import RemoveFavourite from './RemoveFavourite';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [favourites, setFavourites] = useState([]); // Ensure that favourites is initialized as an array

  const getMovieRequest = async (searchMovies) => {
    const url = `http://www.omdbapi.com/?s=${searchMovies}&apikey=b3d8d4d6`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (responseJSON.Search) {
      setmovies(responseJSON.Search);
    }
    console.log(responseJSON);
  };

  useEffect(() => {
    getMovieRequest(searchMovies);
  }, [searchMovies]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourite', JSON.stringify(items));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourite')) || [];
    setFavourites(movieFavourites);
  }, []);

  const addFavourite = (movie) => {
    const newfavourite = [...favourites, movie];
    setFavourites(newfavourite);
    saveToLocalStorage(newfavourite);
  };

  const removeFavourite = (movie) => {
    const newfavourite = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newfavourite);
  };

  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <Headind heading="MOVIE DB" />
        <form className="form-inline">
          <SearchMovies searchMovies={searchMovies} setSearchMovies={setSearchMovies} />
        </form>
      </nav>
      <div className="row">
        {Array.isArray(movies) && (
          <Movielist movies={movies} handlefavourite={addFavourite} favourite={Favourite} />
        )}
      </div>
      <Navbar bg="dark" expand="lg">
        <Headind heading="Favourites" />
      </Navbar>
      <div className="row">
        {Array.isArray(favourites) && (
          <Movielist
            movies={favourites}
            handlefavourite={removeFavourite}
            favourite={RemoveFavourite}
          />
        )}
      </div>
    </div>
  );
};

export default App;
