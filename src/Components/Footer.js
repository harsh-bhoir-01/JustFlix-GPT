import { BiCopyright } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-1 w-full font-serif py-2 mt-auto bg-black ">
      <div className="flex flex-wrap">
        <h1 className="text-white">Created by</h1>
        <div className="text-white">
          <FcLike className=" mt-1 ml-1" />
        </div>
      </div>
      <h1 className="text-red-600"> Harsh Bhoir</h1>
      <h1 className="text-white">
        <BiCopyright className="mt-1 font-bold" />
      </h1>
      <h1 className="text-white">2024</h1>
      <h1 className="text-white">Netflix-</h1>
      <h1 className=" text-red-600">GPT</h1>
    </div>
  );
};

export default Footer;
