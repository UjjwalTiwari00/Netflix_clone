import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  console.log(movies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div>
        <MovieList title={"Now Playing"} movie={movies} />
        <MovieList title={"Now Playing"} movie={movies} />
        <MovieList title={"Now Playing"} movie={movies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
