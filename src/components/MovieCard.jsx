import React from 'react'
import { IMG_URL } from "../constants/constant.js"

const MovieCard = ({ poster_path }) => {
  if(!poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4 flex-shrink-0">
      <img alt='movie card' src={IMG_URL + poster_path} className="w-full" />
    </div>
  )
}

export default MovieCard
