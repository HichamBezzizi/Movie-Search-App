import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = movielist => {
  // movielist.movie.forEach(movie => console.log(movie));

  const list = movielist.movie.map((movie, id) => <MovieCard key={id} movie={movie} />);

  return <div>{list}</div>;
};

export default MovieList;
