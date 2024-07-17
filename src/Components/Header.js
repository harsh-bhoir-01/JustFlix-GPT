import React, { useEffect } from "react";
import img2 from "../Images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_AVATAR } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { removeGeminiResults, toggleGptSearch } from "../Utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.gptShowSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
    dispatch(removeGeminiResults());
  };
  return (
    <div className="bg-gradient-to-b from-black w-full z-30 flex justify-between select-none absolute ">
      <div>
        <img className=" w-48 ml-36 " alt="logo" src={img2} />
      </div>
      {user && (
        <>
          <div>
            <button
              onClick={() => handleGptSearch()}
              className="text-[#E50914] text-sm font-medium font-sans ml-[580px] border border-[#E50914] h-10 px-3 mt-5 bg-[#000000] rounded-md hover:bg-[#E50914] hover:text-white "
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="flex mr-10">
            <span className="mt-7 mx-2 font-sans font-medium text-base text-white">
              <p>Welcome {user?.displayName}</p>
            </span>
            <img
              className="h-9 w-9 mt-6 mx-2 "
              alt="profile"
              src={USER_AVATAR}
            />
            <button
              className=" text-white font-medium font-sans hover:text-red-700"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
