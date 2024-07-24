import React, {useState} from 'react'
import { RiMoneyDollarCircleLine, RiYoutubeLine, RiGithubFill, RiTwitchFill, RiInstagramLine, RiFilter3Fill, RiCloseLargeFill } from "react-icons/ri";


const Sidebar = () => {
    const [showSidebar,setShowSidebar] = useState(false);

  return (
    <>
        <div className={`w-[80%] md:w-[40%] fixed lg:static top-0 
            ${showSidebar ? "left-0" : "-left-full"} 
            lg:w-80 h-full overflow-y-scroll text-gray-400 bg-[#181A20] transition-all p-4 lg:p-0 border-r border-[#E58D27] lg-shadow-none`}>
            {/*search*/}
            <div className="bg-[#2A2322]/50 rounded-2xl p-4 mb-4">
                <h4 className="mb-4 text-white text-lg">Pc World</h4>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="mouse" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="mouse">Mouse</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="keyboard" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="keyboard">Keyboard</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="monitors" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="monitors">Monitors</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="pc_parts" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="pc_parts">PC Parts</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="mouse_pad" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="mouse_pad">Mouse Pad</label>
                </div>
            </div>

            <h4 className="mb-4 text-white text-lg">Hacking</h4>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="raspberry" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="raspberry">Raspberry Pi</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="rubber_ducky" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="rubber_ducky">Rubber Ducky</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="lan-turtle" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="lan-turtle">Lan-turtle</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="wifi_pineapple" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="wifi_pineapple">WiFi Pineapple</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="flipper_zero" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#E58D27] checked:border-blue-600 focus:outline-none appearance-none"/>
                    <label htmlFor="flipper_zero">Flipper Zero</label>
                </div>
            </div>
            

            <h4 className="mb-4 text-white text-lg">Price</h4>
            <form className="flex flex-col gap-8">
                <div className="flex items-center justify-between gap-4">
                <div className="relative">
                    <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2 text-white"/>
                <input type="number" className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"/>
                </div>
                <span>-</span>
                <div className="relative">
                    <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2 text-white"/>
                <input type="number" className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"/>
                </div>
                </div>
                
                <button type="submit" className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all">Apply Filters</button>
            </form>

            </div>
            {/* social media*/}
            <ul className="flex items-center justify-between">
                <li>
                    <a href="https://www.youtube.com/@Smoothsex" target="_blank" className="text-3xl text-white"><RiYoutubeLine /></a>
                </li>
                <li>
                    <a href="https://github.com/Smooth2044" target="_blank" className="text-3xl text-white"><RiGithubFill /></a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/smoothsex" target="_blank" className="text-3xl text-white"><RiTwitchFill /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/antidepresivo_con_depresion/" target="_blank" className="text-3xl text-white"><RiInstagramLine /></a>
                </li>
            </ul>
        </div>
        {/* Button mobile*/}
        <button onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-xl z-40">
            {showSidebar ? <RiCloseLargeFill /> : <RiFilter3Fill />}
        </button>
        </>
  )
}

export default Sidebar