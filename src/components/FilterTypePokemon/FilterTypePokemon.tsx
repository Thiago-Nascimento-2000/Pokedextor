import { FaHouse, FaRegSnowflake } from "react-icons/fa6";
import { IoBook, IoWater } from "react-icons/io5";
import { Search } from "../Search/Search";
import { IoMdFlash } from "react-icons/io";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { GiFlyingTarget, GiPoisonBottle, GiSpotedFlower } from "react-icons/gi";
import { SiFireship } from "react-icons/si";

const FilterTypePokemon = () => {
    return (
        <div className="mt-30 flex items-center gap-4 flex-col md:flex-row">
            <div>
                <h2 className="flex items-center gap-2"><IoBook size={20}/> Busque por tipo</h2>
                <div className="bg-[#050914] flex h-12 mt-1 w-100 border border-[#323438] scrollbar-hide rounded-2xl p-2 overflow-auto">
                <div className="flex gap-4 items-center px-1">
                <div className="hover:cursor-pointer"> <FaHouse size={20}/> </div>
                <div className="bg-red-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><SiFireship size={20}/></div>
                <div className="bg-cyan-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><FaRegSnowflake size={20}/></div>
                <div className="bg-blue-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><IoWater size={20}/></div>
                <div className="bg-violet-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><GiPoisonBottle size={20}/></div>
                <div className="bg-sky-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><GiFlyingTarget size={20}/></div>
                <div className="bg-gray-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><HiOutlineBugAnt size={20}/></div>
                <div className="bg-yellow-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><IoMdFlash size={20}/></div>
                <div className="bg-green-400 w-8 h-8 rounded-[50px] hover:cursor-pointer flex items-center justify-center"><GiSpotedFlower size={20}/></div>
            </div>
        </div>
            </div>
            <Search />
        </div>
    )
}

export { FilterTypePokemon };