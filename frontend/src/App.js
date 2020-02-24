import React from "react";
import "./App.css";
import MovieCard from './components/MovieCard/MovieCard';

const App = () => {
  return (
    <div className="container">
    <h1 className="header">Music Search App</h1>
    <MovieCard />
    </div>

  );
};

export default App;