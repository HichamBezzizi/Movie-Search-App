import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieCard.css";

const MovieCard = () => {
  const [movies, setMovies] = useState({movies: []});
  // const [card, showCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios("http://localhost:4000/movies");
      setMovies(data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <h1 className="title">Hello</h1>
      <code>{console.log(movies.data)}</code>
    </div>
  );
};

export default MovieCard;
