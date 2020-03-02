import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = movies => {
  // movielist.movie.forEach(movie => console.log(movie));

  const listOfMovies = movies.movie.map((movie, id) => (
    <MovieCard key={id} movie={movie} />
  ));

  return <div>{listOfMovies}</div>;
};

export default MovieList;

