import React, { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      apiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
    console.log("json", json);
  };

  useEffect(()=>{
    getNowPlayingMovies()
  },[])

}

export default useNowPlayingMovies;