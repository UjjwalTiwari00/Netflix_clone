import { createSlice } from "@reduxjs/toolkit";

const suggestMovieSlice=createSlice({
    name:"suggestMovies",
    initialState:{
        movieName:null,
        movieData:null   
    },
    reducers:{
        addSUggestMovies:(state,action)=>{
            const {moviename,movieSearch} =action.payload
            state.movieName=moviename ,
            state.movieData=movieSearch
        },
        removeSuggestMovies:(state)=>{
            state.movieName=null ,
            state.movieData=null
        }
    }

})

export const{addSUggestMovies,removeSuggestMovies}=suggestMovieSlice.actions;

export default suggestMovieSlice.reducer;