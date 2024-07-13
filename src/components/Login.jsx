import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignUp, setSignUp]=useState(true);

  function toggleHandler(){
    setSignUp(!isSignUp);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
/>
      </div>
      <div className='absolute bg-opacity-70 bg-black mt-28 mx-auto right-0 left-0 w-3/12 h-4/6'>
        <form className='flex flex-col '>
        <h1 className='p-1 m-1 text-3xl font-bold text-white float-left'>{isSignUp ?"Sign In" :"Sign Up"}</h1>
        {
          !isSignUp&&(
             <input type='text' placeholder='Name' className='p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white'></input>
          )
            
           
          }
          <input type='text' placeholder='email' className='p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white'></input>
          <input type='password' placeholder='password' className='p-2 w-4/5 m-2 ml-10 bg-opacity-80 bg-black text-white'></input>
          <button className='p-2 w-4/5 m-2 text-2xl font-bold text-white bg-red-700 ml-10'>{isSignUp ?"Sign In" :"Sign Up"}</button>
          
          {
            isSignUp&&(<>
              <h3 className='p-1 w-10 m-1 ml-40 font-bold text-white'>or</h3>
              <h2 className='p-1 w-2/5 m-1 ml-28 font-bold text-white float-left'>Forget password?</h2>
            </>)
          }
          
          {
            isSignUp?(
              <h2 className='p-1 ml-10 text-zinc-400'>New to Netflix?<span onClick={()=>{toggleHandler()}}  className='p-1 m-1 text-lg font-bold text-white cursor-pointer'>Sign up now</span></h2>
            ):(<>
              <h3 className='p-1 w-10 m-1 ml-40 font-bold text-white'>or</h3>
              <h2 className='p-1 ml-10 mt-9 text-zinc-400'>Already SignUp?<span onClick={()=>{toggleHandler()}}  className='p-1 m-1 text-lg font-bold text-white cursor-pointer bg-zinc-700 rounded-lg'>Sign In</span></h2>
            </>)
          }
          
        </form>
      </div>
    </div>
  )
}

export default Login