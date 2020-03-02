import React from "react";
import "./MovieCard.css";

const MovieCard = movie => {
//   console.log(movie);

  return (
    <div className="container">
      <div className="card">
        <h2>{movie.movie.title}</h2>
        <ul>
          <li> Genre: {movie.movie.genre}</li>
          <li> Director: {movie.movie.director}</li>
          <li> Release: {movie.movie.releaseDate}</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
