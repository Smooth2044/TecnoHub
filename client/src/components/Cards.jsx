import React from 'react'

const Cards = (props) => {
    const{img, tittle, category, price} = props;

  return (
    <div className="bg-[#2A2322]/50 p-6 rounded-2xl flex flex-col gap-1 w-full md:w-auto">
        <img src={img} className="w-full xl:w-52 h-80 lg:h-52 object-cover rounded-2xl"/>
        <h1 className='text-xl text-white'>{tittle}</h1>
        <span className='text-gray-400'>{category}</span>
        <div className='flex items-center gap-4'>
            <h5 className='text-xl text-[#E58D27]'>${price}</h5>
            <button className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all">Buy</button>
        </div>
    </div>
  )
}

export default Cards