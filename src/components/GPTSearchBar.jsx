import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { options } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addSUggestMovies } from "../utils/SuggestMovieSlice";

const GPTSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const fetchMovies = async (name) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + name + '&include_adult=false&language=en-US&page=1', options);
    const json = await data.json();
    return json.results;
  };

  const HandleGeminiSearchClick = async () => {
    const GeminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query in objec:" +
      searchText.current.value +
      ". only give me names of 5 movies, movies name should be comma seperated like the example result give ahead. Example = Avengers, Iron Man, John Wick, spider man, la la land";

    const genAI = new GoogleGenerativeAI(
      import.meta.env.VITE_SECURE_GEMINI_API_KEY
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = GeminiQuery;

    const result = await model.generateContent(prompt);
    const Moviesdata = result.response.text().split(",");

    const MoviesSuggestionList = Moviesdata.map((name) => fetchMovies(name));

    const SearchResultPromises = await Promise.all(MoviesSuggestionList);
    console.log(SearchResultPromises);

    dispatch(addSUggestMovies({ moviename: Moviesdata, movieSearch: SearchResultPromises }));
  };

  return (
    <div className="pt-5 flex justify-center items-center ">
      <form
        className="grid grid-cols-1 sm:grid-cols-12 w-11/12 sm:w-1/2 bg-slate-800 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 ml-4 sm:ml-20 rounded-lg"
          placeholder="search for movies"
        />

        <button
          className="col-span-2 m-4 py-2 px-4 bg-stone-600 text-white rounded-lg"
          onClick={HandleGeminiSearchClick}
        >
          search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
