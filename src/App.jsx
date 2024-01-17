
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiMedicalCross } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import Car from "./components/Car";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar"
import Card from "./components/shared/Card";


function App() {
  const [showMenu, setShowMenu] = useState (false);
  const [showOrder, setShowOrder] = useState (false);
   
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false);
  };
  const toggleOrders =  () => {
    setShowOrder(!showOrder)
    setShowMenu(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car  showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* Menu Movil */}
      <nav className="bg-[#1f1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <HiOutlineUserCircle />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <LuBadgePercent />
        </button>
        <button className="p-2">
          <CiMedicalCross  />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <MdOutlineClose /> : <CgMenuRightAlt />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 grid pb-16">
        <div className=" md:p-6 p-4 ">
          {/*Header */}
         <Header />
          {/*Title content */}
          <div className="flex items-center justify-between mb-16">
                <h2 className="text-xl text-gray-300">Choose Disher</h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1f1D2B] py-2 px-4 rounded-lg">
                  <FaAngleDown />Dine in
                </button>
              </div>
          {/*Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/*Card */} 
            <Card 
            img="cascomotos.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="guantes.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="cascomotos.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="guantes.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="guantes.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="cascomotos.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="guantes.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
            {/*Card */} 
            <Card 
            img="cascomotos.png" 
            description="AGV Pista GP R" 
            price="150" 
            inventory="20 Unidades" />
          </div> 
          
        </div>

      </main>
    </div>
  )
}

export default App
