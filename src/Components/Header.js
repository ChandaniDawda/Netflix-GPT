import  { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
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