import React from 'react'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>  
    {/*Title And Serach */}
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">            
      <div >
        <h1 className="text-2xl text-gray-300">Jeague Resto</h1>
        <p className="text-gray-500"> 01 enero 2024</p>
        </div>
        <form>
          <div className="w-full relative">
            <FiSearch className="absolute left-3 top-1/3 -traslate-y-1/2 text-white" />
            <input type="text" className="bg-[#1f1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search" />
          </div>
     
        </form>  

    </div>
        {/*Tabs */}  
    <div>
        <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
          <a href="#"className="relative py-3 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">
            Hot Dishes
            </a>
          <a href="#"className="py-3 pr-4">
            Cold Dishes
            </a>
          <a href="#"className="py-3 pr-4 ">
            Soup
            </a>
          <a href="#"className="py-3 ">
            Grill
            </a>
        </nav>
      
      </div>
  </header>
  )
}

export default Header
