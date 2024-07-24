import React, {useState} from 'react'
import { RiShoppingCart2Line, RiHeart2Line, RiAlignTop, RiAlignBottom } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";


const Header = () => {
    const[showMenu, setShowMenu] = useState(false);

  return (

    <header className="h-[7vh] lg:h-[10vh] text-gray-400 p-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
            {/*movile*/}
            <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden text-2xl">
                <RiAlignBottom />
            </button>
            <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all 
                ${showMenu ? "top-0" : "-top-full"}`}>
                    <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-4 px-10 z-50">
                        <RiAlignTop />
                    </button>
                <ul className="mt-10">
                <li>
                    <a href="#" className="block text-center p-4 text-2xl">Home</a>
                </li>
                <li>
                    <a href="#" className="block text-center p-4 text-2xl">Hardware</a>
                </li>
                <li>
                    <a href="#" className="block text-center p-4 text-2xl">Hacking</a>
                </li>
                </ul>
            </div>
            {/*menu */}
            <ul className="hidden lg:flex items-center gap-6">
                <li>
                    <img src="client/src/components/TecnoHub.png" className="w-17 h-16"/>
                </li>
                <li>
                    <a href="#" className="hover:text-[#E58D27] transition-colors">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#E58D27] transition-colors">Hardware</a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#E58D27] transition-colors">Hacking</a>
                </li>
            </ul>
            {/*User menu*/}
            <ul className="flex items-center gap-6 text-xl">
                
                <li>
                    <button className="hover:text-[#E58D27] transition-colors"><RiShoppingCart2Line /></button>
                </li>

                <li>
                    <a href="/register"><button className="hover:text-[#E58D27] transition-colors"><FaUserPlus /></button></a>
                </li>
                <li>
                    <a href="/login"><button className="hover:text-[#E58D27] transition-colors"><IoMdLogIn /></button></a>
                </li>
            </ul>
        </header>
  )
}

export default Header