import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidatData } from "../Utils/validate";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { NETFLIX_BG } from "../Utils/constants";
import Footer from "./Footer";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [showPassword, setShowPassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatach = useDispatch();

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidatData(
      userName.current?.value,
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatach(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const toggleSignupform = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="absolute" alt="bg" src={NETFLIX_BG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="select-none absolute mx-auto left-0 right-0 mt-32 flex flex-col w-[400px] bg-black rounded-[4px] bg-opacity-80"
      >
        <h1 className="mt-16 my-6 ml-16 font-sans text-white font-bold text-3xl select-none">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            ref={userName}
            className=" p-4 my-2 ml-14  w-72 rounded-[4px] placeholder:font-sans placeholder:text-base placeholder:font-base bg-black bg-opacity-60 border border-white cursor-text text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className=" p-4 my-2 ml-14  w-72 rounded-[4px] placeholder:font-sans placeholder:text-base placeholder:font-base bg-black bg-opacity-60 border border-white cursor-text text-white"
          type="text"
          placeholder="Email"
        />
        <div className="relative">
          <input
            ref={password}
            className=" p-4 my-2 ml-14 w-72 rounded-[4px] placeholder:font-sans placeholder:text-base placeholder:font-base bg-black bg-opacity-60 border border-white cursor-text text-white"
            type={showPassword}
            placeholder="Password"
          />
          <span
            onClick={() => toggleShowPassword()}
            className="absolute  text-base top-7 right-[4.5rem] text-white cursor-pointer"
          >
            <BsEyeFill />
          </span>
        </div>
        {errorMessage == null ? null : (
          <div className="flex ml-14 font-mono text-base p-1 ">
            <AiFillCloseCircle className="mt-[5px] mr-1" />
            <p className="ml-1 text-red-700">{errorMessage}</p>
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="p-2 my-3 ml-14 bg-red-700 w-72 rounded-[4px] cursor-pointer text-white font-sans font-semibold hover:border border-white"
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignupform}
          className="p-2 my-2 ml-14 text-white font-sans mb-16 select-none cursor-pointer "
        >
          {signInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In now..."}
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
