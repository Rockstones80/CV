import Rectangle2 from "../../assets/Rectangle2.svg";
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import women from "../../assets/women.svg";
import Group11 from "../../assets/Group11.svg";

const Login = () => {
  return (
    <div className=" grid grid-cols-2 my-12 mx-20 bg-white rounded-3xl shadow-lg">
      <div className="flex justify-center py-10 px-8">
        <div className=" flex flex-col">
          <p className=" text-3xl font-bold text-center">
            {" "}
            Resum<span className=" text-[#8910F1]">o</span>
          </p>
          <p className=" text-[16px] mb-[24px] text-center">
            Securely login to your Resum
            <span className=" text-[#8910F1]">o</span>
          </p>
          <form action="" className="flex flex-col gap-[18px]">
            <div className=" flex items-center py-1 w-[356px] pl-5 rounded-xl gap-4 bg-[#F0EDFF]">
              <FiUser />
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className="py-2 w-[290px] px-2 outline-0 bg-inherit text-black"
              />
            </div>
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
                Login now
              </button>
            </div>
          </form>
          <div>
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 font-semibold text-[16px]">
                <span className=" font-bold text-black">Login</span> with Others
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300">
              <FcGoogle />
              <span>Login with google</span>
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-white text-gray-700 border border-gray-300 mb-2 hover:bg-gray-100 transition-colors duration-300">
              <FaFacebookSquare color="blue" />
              <span>Login with Facebook</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className=" bg-cover bg-center w-[100%] h-[520px] rounded-r-3xl flex justify-center items-center "
        style={{
          backgroundImage: `url(${Rectangle2})`,
        }}
      >
        <div className=" w-[290px] h-[384px] bg-white  bg-opacity-20 rounded-3xl relative border border-slate-500">
          <p className=" max-w-[184px] font-bold text-white text-3xl absolute top-[5%] font-sans pl-4">Very good works are waiting for you Login Now!!!</p>
          <img src={Group11} alt="" className=" absolute right-[90%] top-[70%]" />
        </div>
          <img src={women} alt="" className=" absolute bottom-[133px]" />
      </div>
    </div>
  );
};

export default Login;
