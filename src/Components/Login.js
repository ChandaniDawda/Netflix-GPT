import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [IsSignInForm, setIsSignInForm] =  useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
          displayName: name.current.value,
           photoURL: "https://avatars.githubusercontent.com/u/203419834?v=4"
          })
          .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
                  dispatch(addUser
                    ({ uid: uid,
                       email: email,
                        displayName: displayName,
                         photoURL: photoURL }));
          navigate("/browse");
  
          }).catch((error) => {
  
         setErrorMessage(error.code + " - " + error.message);
    });

          console.log(user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
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
      <div>
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_medium.jpg"
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

 
export default Login;