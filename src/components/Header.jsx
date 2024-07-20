import React from "react";
import netflix_logo from "../images/netflix_logo.png";
import profile_pictures from "../images/profile_pictures.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


function Header() {
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  console.log("this is user data ->");
  console.log(user);


  const signout=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
// todo::: here this function is for browser from login and from signup
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {    
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browser")
      } else {
          dispatch(removeUser());
          navigate("/")

      }
    });

    return()=>unsubscribe();
      },[])
  
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-zinc-900 z-20 w-full flex justify-between">
      <div>
        <img className="w-44" src={netflix_logo} alt="logo" />
      </div>

      {user &&(<div className="flex justify-center items-center ">
        <img className="w-16 mt-2 mr-2 " src={profile_pictures} />
        <button className="mt-4 bg-orange-600 p-2 rounded-full" onClick={signout}>Sign Out</button>
        <div></div>
      </div>)}
    </div>
  );
}

export default Header;