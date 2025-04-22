import React, { useEffect, useState } from "react";
import { apiOptions } from "../utils/constants";

const VideoBackground = ({ movieId }) => {

  const [trailerId , setTrailerId] = useState(null)
  const getMovieBackground = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      apiOptions
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    setTrailerId(trailer.key)
  };

  useEffect(() => {
    getMovieBackground();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerId+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
