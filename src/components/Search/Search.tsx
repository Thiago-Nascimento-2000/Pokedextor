import { PiMagnifyingGlassFill } from "react-icons/pi";
import type { AppContextType } from "../../context/Provider";
import AppContext from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";


const Search = () => {
      const { setSearch, listPokemon } = useContext(AppContext) as AppContextType;
      const [inputValue, setInputValue] = useState("");

      useEffect(() => {
        const handleSearch = () => {
        setSearch(listPokemon.filter((pokemon) => pokemon.name.includes(inputValue)));
      }
      handleSearch();
      }, [listPokemon, inputValue, setSearch]);
      
       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.toLowerCase();
            setInputValue(value);
       }


    return (
        <div>
            <h2 className="flex items-center gap-2"><PiMagnifyingGlassFill size={20}/> Encontre seu Pokemon:</h2>
            <input onChange={handleInputChange} className="h-12 rounded-2xl outline-none border w-100 mt-1 text-white border-[#323438] bg-[#050914] p-4" placeholder="Pesquisar" type="text"/>
        </div>
    )
}

export { Search };