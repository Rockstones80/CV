import Rectangle2 from "../../assets/Rectangle2.svg";
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import women from "../../assets/women.svg";
import Group11 from "../../assets/Group11.svg";
import { useState } from "react";

const Login = () => {

  const [isSignUp, setSignUp] = useState(false);


  const toggleSignUp = () => {
    setSignUp( !isSignUp)
  }

  

  return (
    <div className=" grid grid-cols-2 my-12 mx-20 bg-white rounded-3xl shadow-lg">
      <div className="flex justify-center pt-9 px-8">
        <div className=" flex flex-col">
          <p className=" text-3xl font-bold text-center">
           {
            isSignUp ? ('Sign up an Account') : (<>{'Resum'}<span className="text-[#8910F1]">o</span></>)
           }
          </p>
          <p className=" text-[16px] mb-[24px] text-center">
            { 
              isSignUp ? (<>{'Securely to your Resum'}<span className="text-[#8910F1]">o</span></>) : (<> {'Securely login to your Resum'}<span className=" text-[#8910F1]">o</span> </>)
            }
          </p>
          <form action="" className="flex flex-col gap-[18px]">
            {
              isSignUp ? (
              <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
                />
            </div>)
            :(
            <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
              <FiUser />
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className="py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
                />
            </div>)
              }
            <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
              <RiLock2Line />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className=" py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
              />
            </div>
            <div className=" flex justify-center">
              <button className="mb-6 font-bold text-[12px] w-[124px] h-[45px] bg-[#8910F1] rounded-2xl  text-white shadow-md hover:bg-purple-700 transition-colors duration-300">
                { isSignUp ? 'Sign up' : 'Login Now'}
              </button>
            </div>
          </form>
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 font-semibold text-[16px]">
               { 
               isSignUp ? (<><span className=" font-bold text-[#8910F1]">Sign Up</span> {'with Others'}</>) :
               (<><span className=" font-bold text-[#8910F1]">Log In</span> {'with Others'}</>)
               }
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300">
              <FcGoogle />
              { 
                isSignUp ? (<>{'Sign up with'}<span className="font-bold ml-[-5px]">Google</span></>) : (<>{'Login with'}<span className="font-bold ml-[-5px]">Google</span></>)
              }
              
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-2 px-3 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300">
              <FaFacebookSquare color="blue" />
              { 
                isSignUp ? (<>{'Sign up with'}<span className="font-bold ml-[-5px]">Facebook</span></>) : (<>{'Login with'}<span className="font-bold ml-[-5px]">Facebook</span></>)
              }
            </button>
            {
              !isSignUp ? (
            <div className=" flex gap-2 justify-center mt-6 group text-gray-500 font-semibold">
            <p>Don&apos;t have an account?</p>
            <button className=" font-bold text-[#8910F1] group-hover:underline transition-colors duration-400" onClick={toggleSignUp}>Sign Up</button>
            </div>) :
            (
            <div className=" flex gap-2 justify-center mt-6 group text-gray-500 font-semibold">
            <p>Already have an account?</p>
            <button className=" font-bold text-[#8910F1] group-hover:underline transition-colors duration-400" onClick={toggleSignUp}>Log In</button>
            </div>)
            }
        </div>
      </div>
      <div
        className=" bg-cover bg-center w-[100%] h-[530px] rounded-r-3xl flex justify-center items-center "
        style={{
          backgroundImage: `url(${Rectangle2})`,
        }}
      >
        <div className=" w-[290px] h-[384px] bg-white  bg-opacity-20 rounded-3xl relative border border-slate-500">
          <p className=" max-w-[184px] font-bold text-white text-3xl absolute top-[5%] font-sans pl-4">Very good works are waiting for you {!isSignUp? ('Login Now!!!'): ('Sign Up!!!')}</p>
          <img src={Group11} alt="" className=" absolute right-[90%] top-[70%]" />
        </div>
          <img src={women} alt="" className=" absolute bottom-[127px]" />
      </div>
    </div>
  );
};

export default Login;
