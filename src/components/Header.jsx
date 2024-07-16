import React, { useEffect } from "react";
import netflix_logo from "../images/netflix_logo.png";
import profile_pictures from "../images/profile_pictures.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()

  const signout=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-zinc-900 z-20 w-full flex justify-between">
      <div>
        <img className="w-44" src={netflix_logo} alt="logo" />
      </div>

      <div className="flex justify-center items-center ">
        <img className="w-16 mt-2 mr-2 " src={profile_pictures} />
        <button className="mt-4 bg-orange-600 p-2 rounded-full" onClick={signout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Header;