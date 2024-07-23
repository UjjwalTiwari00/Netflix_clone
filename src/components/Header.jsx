import React from "react";
import netflix_logo from "../images/netflix_logo.png";
import profile_pictures from "../images/profile_pictures.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  
  // console.log("this is user data ->");
  // console.log(user);

  const signout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  // todo::: here this function is for browser from login and from signup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, [])
  
  return (
    <div className="absolute px-4 sm:px-8 py-2 bg-gradient-to-b from-zinc-900 z-20 w-full flex justify-between items-center">
      <div>
        <img className="w-28 sm:w-44" src={netflix_logo} alt="logo" />
      </div>

      {user && (
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-5">
           <img className="w-10 sm:w-16 mt-2 " src={profile_pictures} alt="profile" />
          <button className="mt-4 bg-orange-600 p-1 sm:p-2 rounded-full text-xs sm:text-base" onClick={signout}>
            Sign Out
          </button>
          <Link to='/GPTsearch'> <button className="mt-4 bg-pink-600 p-1 sm:p-2 rounded-full text-xs sm:text-base" >GPTsearch</button></Link>
        </div>
         
        </div>
      )}
    </div>
  );
}

export default Header;
