import  { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const showGptSearch = useSelector(state => state.gpt.showGptSearch);

 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
// toggle GPT search modal or navigate to GPT search 
     dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if(user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid,
           email: email,
            displayName: displayName,
             photoURL: photoURL }));
          navigate("/browse");   
      } else {
        dispatch(removeUser());
        navigate("/");
     
      }
    });
// unsubscribe when components  unmount
    return () => unsubscribe();
  }, []);

  


  return (
    <header className="absolute z-50 w-full px-8 py-2 bg-gradient-to-b from-black to-transparent flex items-center justify-between">
      <img
        className="w-40 m-4 cursor-pointer"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center gap-4 mr-4">
         {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
  
          <button className="py-2 px-4 bg-purple-700 text-white rounded-lg" 
          onClick={handleGptSearchClick}>
            
            {showGptSearch ? "Homepage" : "GPT Search" }

          </button>

          <img
            className="w-10 h-10 rounded-full"
            alt= "photoURl"
            src={USER_AVATAR}
          />

          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>

        </div>
      )}
    </header>
  );
};

export default Header;