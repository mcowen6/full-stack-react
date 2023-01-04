import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=32627e69";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   searchFilms("Batman");
  // }, []);

  const searchFilms = async (title) => {
    const request = await fetch(`${API_URL}&s=${title}`);
    const response = await request.json();
    setMovies(response.Search);
    // console.log(response.Search);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <br />
      <br />
      <div className="searchInput">
        <input
          placeholder="Search for a film"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchFilms(searchTerm)}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
