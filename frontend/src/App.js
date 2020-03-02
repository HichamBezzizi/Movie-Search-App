import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";

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
    <div>
      <h1 className="header">Movies Search App</h1>
      <MovieList movie={moviesList} />
    </div>
  );
};

export default App;
