import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm , setSignInForm] = useState(true)
  const toggleSignIn = () => {
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="logo"
          className="absolute"
        />
        <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input 
              type="text" 
              placeholder="Email Address" 
              className="p-4 my-4 w-full bg-gray-700"
            />
            {!isSignInForm ?(<input 
              type="text" 
              placeholder="Full Name" 
              className="p-4 my-4 w-full bg-gray-700"
            />):null}
            <input 
              type="password" 
              placeholder="Password" 
              className="p-4 my-4 w-full bg-gray-700"
            />
            <button className="p-4 my-4 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix ? Sign up now" : "Already registered Sign In now" }</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
