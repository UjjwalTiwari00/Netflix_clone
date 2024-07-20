import React, { useEffect, useState } from "react";
import { options } from "../constants/constant";

const VideoTrailer = ({movieid}) => {
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
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerData}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
