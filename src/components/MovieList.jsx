import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movie }) {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4">
        {movie?.map((i) => (
          <MovieCard key={i.id} poster_path={i.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
