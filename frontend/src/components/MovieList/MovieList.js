import React from "react";
import "./MovieList.css";

const MovieList = movielist => {

  
  
  
  // movielist.movie.forEach(movie => console.log(movie));

      const list = movielist.movie.map((movie, id) =>

        <div
            key={id}
            movie={movie}>{movie.title} {movie.genre} {movie.director} {movie.releaseDate}</div>)
            
  return (
    <div>{list}
    </div>
  );
};

export default MovieList;
