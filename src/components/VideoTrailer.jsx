import React, { useEffect, useState } from "react";
import { options } from "../constants/constant";

const VideoTrailer = ({ movieid }) => {
  const [trailerData, setTrailerData] = useState();
  const videoFun = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos`,
      options
    );
    const Json = await data.json();
    console.log("this is trailer data");
    console.log(Json);

    let trailer = Json.results.filter((data) => data.type === "Trailer");
    setTrailerData(trailer[0].key);
  };

  useEffect(() => {
    videoFun();
  }, []);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerData + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;