import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
const Card= (props) => {
    const {showOrder, setShowOrder} = props

  return (
    <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"
}`}
>
    
    {/* Orders */}
    <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full ">
      
      <MdOutlineClose onClick={() => setShowOrder(false)} className=" lg:hidden absolute letf-4 top-4 p-3 box-content  text-gray-300 bg-[#262837] rounded-full text-xl"/>
      <h1 className="text-2xl my-4">Orden #1200500</h1>
      {/* Pills */}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
        <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
        <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
      </div>
      {/*Car */}
      <div>
        <div className="grid grid-cols-6 mb-4 p-4">
          <h5 className="col-span-4">Itmes</h5>
          <h5>Qty</h5>
          <h5 className="">Price</h5>
        </div>
      </div>
          {/*Products*/}
      <div className=" h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">

        {/*Product */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-4">
            {/*Product Description  */}
            <div className="col-span-4 flex items-center gap-2">
              <img src="cascomotos.png " className="w-12 h-12 object-cover"/>
              <div>
                <h5 className="text-sm">Spaicy seaso..</h5>
                <p className="text-xs text-gray-500">$300</p>
              </div>
            </div>
            {/*Qty */}
            <div>
              <span>2</span>
            </div>
            {/*Price */}
            <div>
              <span>$600</span>
            </div>
          </div>
          {/*Note */}
          <div className="grid grid-cols-6 items-center gap-4">
            <form className="col-span-5">
              <input type="text" className="bg-[#1f1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order Note.."/>
            </form>
            <div className="">
              <button className="border border-red-500 p-2 rounded-lg">
                <RiDeleteBin2Fill className="text-red-500"/>
              </button>
            </div>
            </div>
        </div>
        {/*Product */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-4">
            {/*Product Description  */}
            <div className="col-span-4 flex items-center gap-2">
              <img src="cascomotos.png " className="w-12 h-12 object-cover"/>
              <div>
                <h5 className="text-sm">Spaicy seaso..</h5>
                <p className="text-xs text-gray-500">$300</p>
              </div>
            </div>
            {/*Qty */}
            <div>
              <span>2</span>
            </div>
            {/*Price */}
            <div>
              <span>$600</span>
            </div>
          </div>
          {/*Note */}
          <div className="grid grid-cols-6 items-center gap-4">
            <form className="col-span-5">
              <input type="text" className="bg-[#1f1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order Note.."/>
            </form>
            <div className="">
              <button className="border border-red-500 p-2 rounded-lg">
                <RiDeleteBin2Fill className="text-red-500"/>
              </button>
            </div>
            </div>
        </div>
        {/*Product */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-4">
            {/*Product Description  */}
            <div className="col-span-4 flex items-center gap-2">
              <img src="cascomotos.png " className="w-12 h-12 object-cover"/>
              <div>
                <h5 className="text-sm">Spaicy seaso..</h5>
                <p className="text-xs text-gray-500">$300</p>
              </div>
            </div>
            {/*Qty */}
            <div>
              <span>2</span>
            </div>
            {/*Price */}
            <div>
              <span>$600</span>
            </div>
          </div>
          {/*Note */}
          <div className="grid grid-cols-6 items-center gap-4">
            <form className="col-span-5">
              <input type="text" className="bg-[#1f1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order Note.."/>
            </form>
            <div className="">
              <button className="border border-red-500 p-2 rounded-lg">
                <RiDeleteBin2Fill className="text-red-500"/>
              </button>
            </div>
            </div>
        </div>
        {/*Product */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-4">
            {/*Product Description  */}
            <div className="col-span-4 flex items-center gap-2">
              <img src="cascomotos.png " className="w-12 h-12 object-cover"/>
              <div>
                <h5 className="text-sm">Spaicy seaso..</h5>
                <p className="text-xs text-gray-500">$300</p>
              </div>
            </div>
            {/*Qty */}
            <div>
              <span>2</span>
            </div>
            {/*Price */}
            <div>
              <span>$600</span>
            </div>
          </div>
          {/*Note */}
          <div className="grid grid-cols-6 items-center gap-4">
            <form className="col-span-5">
              <input type="text" className="bg-[#1f1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order Note.."/>
            </form>
            <div className="">
              <button className="border border-red-500 p-2 rounded-lg">
                <RiDeleteBin2Fill className="text-red-500"/>
              </button>
            </div>
            </div>
        
          
        </div>
      
      </div>
      {/*Submit payment*/}
      <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Discount</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-400">Subtotal</span>
          <span>$600</span>
        </div>
        <div>
          <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue tp paymet</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
