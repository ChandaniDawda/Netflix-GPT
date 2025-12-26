
import { useState } from 'react';
import Header from './Header';


const Login = () => {
  const [IsSignInForm, setIsSignInForm] =  useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  return (
    <div>

      <Header/>
      <div>
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_medium.jpg"
        alt = "backgroundImage"
        className='login-background-image'
        />
      </div>
    <form className="Sign In Form flex flex-col items-center justify-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8 rounded">

    <h2 className="text-white text-3xl mb-4">
     {IsSignInForm ? "Sign In" : "Sign Up"}</h2>

     {!IsSignInForm && (
      <input type="text" placeholder="Full Name" 
      className="p-2 m-2 bg-gray-700 text-white rounded"/>
     )  
    }

    <input type="text" placeholder="Email Address" 
    className="p-2 m-2 bg-gray-700 text-white rounded"/>

    <input type="password" placeholder="Password" 
    className="p-2 m-2 bg-gray-700 text-white rounded"/>

    <button className="p-3 m-5 bg-red-600 text-white rounded  ">
    {IsSignInForm ? "Sign In" : "Sign Up"}
    </button>

    <p className="py-4 text-white cursor-pointer"
     onClick={toggleSignInForm}>
      {IsSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"} 
     </p>
  </form>
      </div>
  )
}

export default Login;