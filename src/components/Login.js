import React, { useState } from "react";
import Header from "./Header";
import { netflixBG } from "../Utils/constant";
// import { useState } from "react";

const Login = () => {

  const[isSignIn,setisSignIn]=useState(true);
  const toggleSignInForm=()=>{
     setisSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBG} alt="login background" />
      </div>

      <form className="absolute w-3/12 p-12 bg-black m-40 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4 text-white ">{isSignIn?"Sign In":"Sign up"}</h1>
        {!isSignIn &&<input
          type="text"
          placeholder="Name"
          className="p-3 m-3 w-full bg-gray-700 rounded-sm text-white"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-3 w-full bg-gray-700 rounded-sm text-white"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 m-3 w-full  bg-gray-700 rounded-sm text-white"
        />
        <button className="p-2 m-3 bg-red-500 w-full h-13 rounded-lg ">{isSignIn?"Sign In":"Sign up"}</button>
        <p className="text-white ml-3 cursor-pointer" onClick={toggleSignInForm}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
