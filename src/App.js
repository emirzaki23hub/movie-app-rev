import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import loader from "./assets/Spin.gif"
import { initialState, reducer } from "./store/reducer";
import Header from "./components/Header";
import Movie from "./components/Movie";
import AddFavourites from "./components/AddFavourites";
import MovieDetail from "./components/MovieDetail";
import RemoveFavourites from "./components/RemoveFavourites";

const API = "https://www.omdbapi.com/?s=man&apikey=83b6585a";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favourites, setFavourites] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=83b6585a`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="FinProHD" search={search} />
      {selectedMovie && (
        <MovieDetail
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}

<div className="movies">
      {loading && !errorMessage ? (
        <img className="spinner" src={loader} alt="Loading spinner" />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <Movie
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
          onMovieSelect={onMovieSelect}
        />
      )}
      </div>
      <div className="container">
        <hr />
        <h1>Favourites</h1>
        <Movie
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
          onMovieSelect={onMovieSelect}
        />
      </div>
    </div>
  );
}

export default App;
