import React, { useEffect } from 'react'
import Login from './Login'
import  {Browser}  from './Browser'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

export const Body = () => {
  const dispatch=useDispatch()
  const AppRouting=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browser',
      element:<Browser/>
    }
  ])

  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({udi:uid,email:email,displayName:displayName}))
    
  } else {
      dispatch(removeUser());
  }
});
  },[])



  return (
    <div>
        <RouterProvider router={AppRouting}/>
    </div>
  )
}
