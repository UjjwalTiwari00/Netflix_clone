import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  isLoginSlice  from "./isLoginSlice";
const appStore=configureStore(
    {
        reducer:{
            user:userSlice.reducer,
            isLogin:isLoginSlice.reducer
        }
    }
)

export default appStore;