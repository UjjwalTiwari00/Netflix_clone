import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GPTSearchResult() {
  const { movieName, movieData } = useSelector((store) => store.suggestMovies);
  if (!movieName) return null;
  return (
    <div className="p-4 ml-8 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName?.map((movie, index) => (
          <MovieList key={movie} title={movieName} movie={movieData[index]} />
        ))}
      </div>
    </div>
  );
}

export default GPTSearchResult;
