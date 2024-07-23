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
        }
        
    }

})

export const{addSUggestMovies}=suggestMovieSlice.actions;

export default suggestMovieSlice.reducer;