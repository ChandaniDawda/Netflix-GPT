import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { USER_AVATAR, BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    try {
      // 🔹 SIGN UP
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        });

        const { uid, email, displayName, photoURL } = auth.currentUser;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        navigate("/browse");
      }

      // 🔹 SIGN IN
      else {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        navigate("/browse");
      }
    } catch (error) {
      setErrorMessage(error.code + " - " + error.message);
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
          className="login-background-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2
        w-11/12 sm:w-8/12 md:w-4/12 lg:w-3/12
        flex flex-col items-center bg-black bg-opacity-80
        p-8 rounded shadow-2xl"
      >
        <h2 className="text-white text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700 text-white rounded w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 text-white rounded w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 text-white rounded w-full"
        />

        <p className="text-red-500 font-bold py-2">{errorMessage}</p>

        <button
          className="p-3 m-5 bg-red-600 text-white rounded w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 text-white cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;


/*import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { USER_AVATAR } from '../utils/constants';
import { BG_URL } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] =  useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const name = useRef(null);
   const email = useRef(null);
   const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value, password.current.value 
    );
    setErrorMessage(message);
    if (message) return;

    // ✅ SIGN UP (Register new user)
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
          displayName: name.current.value,
           photoURL:USER_AVATAR,
          })
          .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
                  dispatch(addUser
                    ({ uid: uid,
                       email: email,
                        displayName: displayName,
                         photoURL: photoURL }));
          }).catch((error) => {
  
         setErrorMessage(error.code + " - " + error.message);
    });

          
          navigate("/browse");

        })
        .catch((error) => {
          
          setErrorMessage(error.code + " - " + error.message);
        });
    }

    // ✅ SIGN IN (Existing user)
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };
   

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <div>

      <Header/>
      <div className="absolute">
        <img src = {BG_URL}
        alt = "backgroundImage"
        className='login-background-image'
        />
      </div>
    <form
    onSubmit={(e)=> e.preventDefault()}
   className="SignIn-Form absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-8/12 md:w-4/12 lg:w-3/12 flex flex-col items-center bg-black bg-opacity-80 p-8 rounded shadow-2xl transition-all duration-300"

>


    <h2 className="text-white text-3xl mb-4">
     {IsSignInForm ? "Sign In" : "Sign Up"}</h2>

     {!IsSignInForm && (
      <input 
      ref = {name}
      type="text" placeholder="Full Name" 
      className="p-2 m-2 bg-gray-700 text-white rounded"/>
     )  
    }

    <input 
    ref = {email}
    type="text" placeholder="Email Address" 
    className="p-2 m-2 bg-gray-700 text-white rounded"/>

    <input 
    ref = {password}
    type="password" placeholder="Password" 
    className="p-2 m-2 bg-gray-700 text-white rounded"/>

    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
    <button className="p-3 m-5 bg-red-600 text-white rounded " onClick={handleButtonClick}>
    {IsSignInForm ? "Sign In" : "Sign Up"}
    </button>

    <p className="py-4 text-white cursor-pointer"
     onClick={toggleSignInForm}>
      {IsSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"} 
     </p>
  </form>
 </div>
  );
};

 
export default Login; */