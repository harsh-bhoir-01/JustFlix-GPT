import React from "react";
import img2 from "../Images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-30">
      <img className=" w-48 ml-36 " alt="logo" src={img2} />
    </div>
  );
};

export default Header;
