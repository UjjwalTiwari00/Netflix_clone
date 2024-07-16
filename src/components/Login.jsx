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

const Login = () => {
  const navigate = useNavigate();
  // const islogInCheck=useSelector((appStore)=>appStore.isLogin.value);
  const [isLogIn, setIsLogin] = useState(true);
  const [formError, setFormError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onValidate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setFormError(message);
    //tododone::: if my message have some error dont go for login or signup just disply the error and return otherwise signup and login
    if (message) return;

    //todoDone:: signUp logic from
    if (!isLogIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("successfully logedIn");
          console.log(user);
          navigate("/browser");
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
      signInWithEmailAndPassword(
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
        });
    }
  };

  function toggleHandler() {
    setIsLogin(!isLogIn);
  }

  // return (
  //   <div>
  //     <Header />
  //     <div className="absolute">
  //       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
  //     </div>
  //     <div className="absolute bg-opacity-70 bg-black mt-28 mx-auto right-0 left-0 w-3/12 h-4/6">
  //       <form
  //         onSubmit={(e) => {
  //           e.preventDefault();
  //         }}
  //         className="flex flex-col "
  //       >
  //         <h1 className="p-1 m-1 text-3xl font-bold text-white float-left">
  //           {isLogIn ? "Log In" : "Sign Up"}
  //         </h1>
  //         {!isLogIn && (
  //           <input
  //             type="text"
  //             placeholder="Name"
  //             className="p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white"
  //           ></input>
  //         )}
  //         <input
  //           ref={email}
  //           type="text"
  //           placeholder="email"
  //           className="p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white"
  //         ></input>
  //         <input
  //           ref={password}
  //           type="password"
  //           placeholder="password"
  //           className="p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white"
  //         ></input>
  //         <p className="text-red-500 italic p-2 w-4/5 m-2 ml-10 ">
  //           {formError ? formError : ""}
  //         </p>
  //         <button
  //           className="p-2 w-4/5 m-2 text-2xl font-bold text-white bg-red-700 ml-10"
  //           onClick={onValidate}
  //         >
  //           {isLogIn ? "Log In" : "Sign Up"}
  //         </button>

  //         {isLogIn && (
  //           <>
  //             <h3 className="p-1 w-10 m-1 ml-40 font-bold text-white">or</h3>
  //             <h2 className="p-1 w-2/5 m-1 ml-28 font-bold text-white float-left">
  //               Forget password?
  //             </h2>
  //           </>
  //         )}

  //         {isLogIn ? (
  //           <h2 className="p-1 ml-10 text-zinc-400">
  //             New to Netflix?
  //             <span
  //               onClick={() => {
  //                 toggleHandler();
  //               }}
  //               className="p-1 m-1 text-lg font-bold text-white cursor-pointer"
  //             >
  //               Sign up now
  //             </span>
  //           </h2>
  //         ) : (
  //           <>
  //             <h3 className="p-1 w-10 m-1 ml-40 font-bold text-white">or</h3>
  //             <h2 className="p-1 ml-10 mt-9 text-zinc-400">
  //               Already A Account?
  //               <span
  //                 onClick={() => {
  //                   toggleHandler();
  //                 }}
  //                 className="p-1 m-1 text-lg font-bold text-white cursor-pointer bg-zinc-700 rounded-lg"
  //               >
  //                 Log In
  //               </span>
  //             </h2>
  //           </>
  //         )}
  //       </form>
  //     </div>
  //   </div>
  // );

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
      </div>
    </div>
  );
};

export default Login;
