import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { auth } from"../../auth/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Mainspinner from "../../auth/Mainspinner";



const Header = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return <Mainspinner/>;

  return (
    <div className=" flex py-5 px-12 justify-between items-center bg-gradient-to-b from-[#F4E7FF] to-[#fff]">
        <Link to ='/'>
        <p className=" font-bold text-3xl">Resum<span className=" text-[#8910F1]">o</span></p>
        </Link>
      {/* <p>Email: {user.email}</p> */}
      {user.displayName && <p>Name: {user.displayName}</p>}
    </div>
  )
}

export default Header
