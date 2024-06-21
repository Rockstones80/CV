import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className=" flex py-5 px-12 justify-between items-center bg-gradient-to-b from-[#F4E7FF] to-[#fff]">
        <Link to ='/'>
        <p className=" font-bold text-3xl">Resum<span className=" text-[#8910F1]">o</span></p>
        </Link>
    </div>
  )
}

export default Header
