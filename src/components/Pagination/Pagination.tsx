import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import type { AppContextType } from "../../context/Provider";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Pagination = () => {
    const { limit, offset, setOffset } = useContext(AppContext) as AppContextType;

    return (
        <>
        <div className="flex justify-between my-15">
            <button onClick={() => setOffset((old) => Math.max(old - limit, 0))} disabled={offset === 0} className="bg-[#050914] flex items-center hover:cursor-pointer hover:bg-[#050920] px-2 gap-2 border border-[#323438] w-25 h-10 w-fit rounded-md"><FaLongArrowAltLeft />Anterior</button>
            <span>Pagina Atual <strong className="underline">{Math.floor(offset / limit + 1)}</strong> de <strong>1.350</strong></span>
            <button onClick={() => setOffset(offset + limit)} className="bg-[#050914] flex items-center hover:cursor-pointer hover:bg-[#050920] px-2 gap-2 border border-[#323438] w-25 h-10 w-fit rounded-md">Próximo <FaLongArrowAltRight /></button>
        </div>
        </>
    )
}

export default Pagination;