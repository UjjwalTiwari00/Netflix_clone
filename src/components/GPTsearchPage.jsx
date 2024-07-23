import React from "react";
import { Link } from "react-router-dom";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../constants/constant";
import GPTSearchResult from "./GPTSearchResult";
import { useDispatch } from "react-redux";
import { removeSuggestMovies } from "../utils/SuggestMovieSlice";

const GPTsearchPage = () => {
  const dispatch=useDispatch()
  const clearSuggestData=()=>{
    dispatch(removeSuggestMovies());
  }
  return (
    <>
      <div className="fixed -z-10 w-full h-full">
        <img className="w-full h-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="p-4 sm:p-8">
        <Link to={"/browser"}>
          <button className="m-4 py-2 px-2 bg-red-700 text-white rounded-lg" onClick={clearSuggestData}>
            Browse Movies
          </button>
        </Link>
      </div>
      <div>
        <GPTSearchBar />
        <GPTSearchResult />
      </div>
    </>
  );
};

export default GPTsearchPage;
