import React from "react";
import "./MovieCard.css";

const MovieCard = movie => {
  console.log(movie);

  return (
    <div className="container">
      <div className="card">
        <h1>{movie.movie.title}</h1>
        <ul>
          <li>{movie.movie.genre}</li>
          <li>{movie.movie.director}</li>
          <li>{movie.movie.releaseDate}</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
