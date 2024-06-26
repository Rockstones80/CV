
import Header from "./comps/Header"
import Addresume from "./comps/Addresume"
import Hero from "./comps/Hero"


  
const Dashboard = () => {

  return (
    <div>
      <Header/>
      <Hero/>
      <div className="px-16 grid grid-cols-5">
      <Addresume/>
    </div>
      
    </div>
  )
}

export default Dashboard
