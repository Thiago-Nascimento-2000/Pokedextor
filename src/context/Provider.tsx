import { useState } from "react";
import AppContext from "./AppContext";

type ProviderProps = {children: React.ReactNode};

interface Pokemon {
  weight: any;
  height: any;
  sprites: any;
  types: any;
  id: number;
  name: string;
}

export interface AppContextType {
  listPokemon: Pokemon[];
  setListPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  search: Pokemon[];
  setSearch: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const Provider = ({children}: ProviderProps) => {

const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
const [search, setSearch] = useState<Pokemon[]>([]);

const states: AppContextType = {
    listPokemon,
    setListPokemon,
    search,
    setSearch
}

    return (
        <AppContext.Provider value={states}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;