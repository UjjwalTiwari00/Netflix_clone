import { useDispatch } from "react-redux";
import { options } from "../constants/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const MovieDetailApi=async()=>{
       const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options)
        const json=await data.json()
  
        // console.log("this is palying "+json.results);
  
        dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      MovieDetailApi();
    },[])
}

export default useNowPlayingMovies;