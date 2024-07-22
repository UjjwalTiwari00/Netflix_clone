import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


function SecondaryContainer() {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const movies1 = useSelector((store) => store.movies?.popularMovies);
  const movies2=  useSelector((store) => store.movies?.trailerVideo);



  return (
    <div className="bg-black">
      <div>
        <MovieList title={"Now Playing"} movie={movies} />
        <MovieList title={"Popular"} movie={movies1} />
        <MovieList title={"Upcoming Movies"} movie={movies2} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
