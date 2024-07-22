import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../constants/constant";

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
  const fetchMovies=async()=>{
    const data1=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options);
    const json1=await data1.json();
    dispatch(addUpcomingMovies(json1.results));
  }
  useEffect(()=>{
    fetchMovies();
  },[])
}

export default useUpcomingMovies;