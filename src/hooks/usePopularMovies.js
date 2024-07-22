import { useDispatch } from "react-redux";
import { options } from "../constants/constant"
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
   const fetchMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",options);
        
        const json=await data.json();

        // console.log("this is popular"+json);
        
        dispatch(addPopularMovies(json.results))
       
   }
   useEffect(()=>{
        fetchMovies();
   },[])
}

export default usePopularMovies;