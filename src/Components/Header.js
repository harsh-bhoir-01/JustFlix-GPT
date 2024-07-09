import React from "react";
import img2 from "../Images/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_AVATAR } from "../Utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-30 flex justify-between">
      <div>
        <img className=" w-48 ml-36 " alt="logo" src={img2} />
      </div>
      {user && (
        <div className="flex mr-24">
          <span className="mt-7 mr-4 font-sans font-medium text-base text-white">
            <p>{user?.displayName}</p>
          </span>
          <img className="h-9 w-9 mt-6 mr-2 " alt="profile" src={USER_AVATAR} />
          <button
            className="ml-2  text-white font-medium font-sans hover:text-red-700"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
