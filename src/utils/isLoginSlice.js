import { createSlice } from "@reduxjs/toolkit";

const intiState={
    value:false,
}

export const isLoginSlice=createSlice({
    name:'islogin',
    initialState:intiState,
    reducers:{
        isLogin:(state)=>{
             state.value;
        }
    }
})

export const{isLogin} =isLoginSlice.actions
export default isLoginSlice.reducer