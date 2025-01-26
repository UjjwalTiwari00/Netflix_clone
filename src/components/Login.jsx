import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase.js";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogin] = useState(true);
  const [formError, setFormError] = useState(null);
  const [loading, Setloading] = useState(false);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onValidate = async () => {
    //todoDone::: if my message have some error dont go for login or signup just disply the error and return otherwise signup and login
    // if (message) return;
    // Setloading(true);
    // todoDone:: signUp logic from
    if (!isLogIn) {

      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      
      setFormError(message);if (message) return;
      Setloading(true);
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            // todo::: yaha pe auth.currentUser issliye use kiya hia kyu ki pichla wala user upadated nahi hai ye wala updated hai
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorCode + " " + errorMessage);
        });
    }
    //todoDone:: login logic
    else {

      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      
      setFormError(message);if (message) return;
      Setloading(true);

      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorCode + " " + errorMessage);
          Setloading(false);
        });
    }
    Setloading(false);
  };

  function toggleHandler() {
    setIsLogin(!isLogIn);
  }
  return (
    <div className="min-h-screen bg-black relative">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-opacity-80 bg-black p-8 rounded-lg max-w-md w-full space-y-4"
          >
            <h1 className="text-3xl font-bold text-white">
              {isLogIn ? "Log In" : "Sign Up"}
            </h1>
            {!isLogIn && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="p-2 w-full bg-opacity-80 bg-black text-white rounded"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2 w-full bg-opacity-80 bg-black text-white rounded"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 w-full bg-opacity-80 bg-black text-white rounded"
            />
            {formError && <p className="text-red-500 italic">{formError}</p>}
            <button
              className="p-2 w-full text-2xl font-bold text-white bg-red-700 rounded"
              onClick={onValidate}
            >
              {isLogIn ? "Log In" : "Sign Up"}
            </button>
            {isLogIn && (
              <>
                <h3 className="font-bold text-white text-center">or</h3>
                <h2 className="text-center text-white font-bold cursor-pointer">
                  Forget password?
                </h2>
              </>
            )}
            <div className="text-center text-zinc-400">
              {isLogIn ? (
                <>
                  New to Moviesai ?
                  <span
                    onClick={toggleHandler}
                    className="text-lg font-bold text-white cursor-pointer"
                  >
                    Sign up now
                  </span>
                </>
              ) : (
                <>
                  Already have an account?
                  <span
                    onClick={toggleHandler}
                    className="text-lg font-bold text-white cursor-pointer"
                  >
                    Log In
                  </span>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
