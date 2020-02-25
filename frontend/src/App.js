import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  //Hooks
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {    //Will run after first render
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/movies");
      setMoviesList(response.data);   //Will set movies and trigger a new render
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Movies Search App</h1>
      <MovieCard movies={moviesList} />
    </div>
  );
};

export default App;
