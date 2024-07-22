import React from "react";
import { useSelector } from "react-redux";
import VideosTitle from "./VideosTitle";
import useRandomNumber from "../hooks/useRandomNumber";
import VideoTrailer from "./VideoTrailer";


function MainContainer() {
  let i = 0;
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  i = useRandomNumber();

  if (!movies) return;



  const { overview, title, id } = movies[i];
  return (
    <div>
      <div>
        <VideosTitle Overview={overview} Title={title} />
        <VideoTrailer movieid={id} />
      </div>
      <div>
      <div>
        
      </div>
      </div>
    </div>
  );
}

export default MainContainer;
