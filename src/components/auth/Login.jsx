import Rectangle2 from "../../assets/Rectangle2.svg";
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import women from "../../assets/women.svg";
import Group11 from "../../assets/Group11.svg";
import { useState } from "react";
import { auth, provider } from "./auth";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";


// import { auth, provider } from "../auth/firebase"

const Login = () => {
  // const provider = 'GoogleAuthProvider'
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const toggleSignUp = () => {
    setSignUp(!isSignUp);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    }

    const handleSign = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((basit) => {
        console.log("user created:", basit.user);
        toast.success("Sign up successfully!");
        navigate("/");
        // handleSign.reset();
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Error creating account. Please try again.");
          });
          
          
          };
          
          const handleClick = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, username, password)
            .then((cred) => {
              console.log("user logged in:", cred.user)
              toast.success("Logged in successfully!");
              navigate("/");
        })
        .catch((err) => {
          console.log(err.message)
          toast.error("Error logging in. Please check your credentials.");
        })
      }


  function handleGoogle() {
    signInWithPopup(auth, provider).then((user) => {
      console.log(user);
      toast.success("Google sign-in successful!");
      navigate("/");
    });
  }

  function handleGitHub() {
    signInWithRedirect(auth, GithubAuthProvider).then((user) => {
      console.log(user);
      toast.success("GitHub sign-in successful!");
      navigate("/");
    });
  }



  return (
    <div className=" grid grid-cols-2 my-12 mx-20 bg-white rounded-3xl shadow-lg">
      <div className="flex justify-center pt-9 px-8">
        <div className=" flex flex-col">
          <p className=" text-3xl font-bold text-center">
            {isSignUp ? (
              "Sign up an Account"
            ) : (
              <>
                {"Resum"}
                <span className="text-[#8910F1]">o</span>
              </>
            )}
          </p>
          <p className=" text-[16px] mb-[24px] text-center">
            {isSignUp ? (
              <>
                {"Securely to your Resum"}
                <span className="text-[#8910F1]">o</span>
              </>
            ) : (
              <>
                {" "}
                {"Securely login to your Resum"}
                <span className=" text-[#8910F1]">o</span>{" "}
              </>
            )}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            {isSignUp ? (
              <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  className="py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
                <FiUser />
                <input
                  type="email"
                  name="userName"
                  placeholder="Username"
                  value={username}
                  className="py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
              <RiLock2Line />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                className=" py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            { isSignUp ? (
            <div className=" flex justify-center">
              <button
                className="mb-6 font-bold text-[12px] w-[124px] h-[45px] bg-[#8910F1] rounded-2xl  text-white shadow-md hover:bg-purple-700 transition-colors duration-300"
                type="submit"
                onClick={handleSign}
              >
              Sign up
              </button>
            </div> ) : ( 
            <div className=" flex justify-center">
              <button
                className="mb-6 font-bold text-[12px] w-[124px] h-[45px] bg-[#8910F1] rounded-2xl  text-white shadow-md hover:bg-purple-700 transition-colors duration-300"
                type="submit"
                onClick={handleClick}
              >
              Log in
              </button>
            </div> ) }
          </form>
          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 font-semibold text-[16px]">
              {isSignUp ? (
                <>
                  <span className=" font-bold text-[#8910F1]">Sign Up</span>{" "}
                  {"with Others"}
                </>
              ) : (
                <>
                  <span className=" font-bold text-[#8910F1]">Log In</span>{" "}
                  {"with Others"}
                </>
              )}
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300" onClick={handleGoogle}>
            <FcGoogle />
            {isSignUp ? (
              <>
                {"Sign up with"}
                <span className="font-bold ml-[-5px]">Google</span>
              </>
            ) : (
              <>
                {"Login with"}
                <span className="font-bold ml-[-5px]">Google</span>
              </>
            )}
          </button>
          <button
            className="flex items-center justify-center gap-3 w-full py-2 px-3 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300"
            onClick={handleGitHub}
          >
            <FaGithub />
            {isSignUp ? (
              <>
                {"Sign up with"}
                <span className="font-bold ml-[-5px]">Github</span>
              </>
            ) : (
              <>
                {"Login with"}
                <span className="font-bold ml-[-5px]">GitHub</span>
              </>
            )}
          </button>
          {!isSignUp ? (
            <div className=" flex gap-2 justify-center mt-6 group text-gray-500 font-semibold">
              <p>Don&apos;t have an account?</p>
              <button
                className=" font-bold text-[#8910F1] group-hover:underline transition-colors duration-400"
                onClick={toggleSignUp}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className=" flex gap-2 justify-center mt-6 group text-gray-500 font-semibold">
              <p>Already have an account?</p>
              <button
                className=" font-bold text-[#8910F1] group-hover:underline transition-colors duration-400"
                onClick={toggleSignUp}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className=" bg-cover bg-center w-[100%] h-[530px] rounded-r-3xl flex justify-center p-20 relative"
        style={{
          backgroundImage: `url(${Rectangle2})`,
        }}
      >
        <div className="  px-40 relative bg-white  bg-opacity-20 rounded-3xl border border-slate-500 flex">
          <p className=" max-w-[184px] font-bold text-white text-3xl absolute top-[5%] font-sans left-8">
            Very good works are waiting for you{" "}
            {!isSignUp ? "Login Now!!!" : "Sign Up!!!"}
          </p>
          <img
            src={Group11}
            // alt=""
            className=" absolute right-[93%] top-[70%]"
          />
        </div>
        <img src={women} alt="" className="absolute bottom-20 left-4" />
      </div>

    </div>
  );
};

export default Login;
