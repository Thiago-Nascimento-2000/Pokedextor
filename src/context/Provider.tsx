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
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Provider = ({children}: ProviderProps) => {

const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
const [search, setSearch] = useState<Pokemon[]>([]);
const [limit, setLimit] = useState<number>(15);
const [offset, setOffset] = useState<number>(1);
const [isLoading, setIsLoading] = useState<boolean>(null as unknown as boolean);


const states: AppContextType = {
    listPokemon,
    setListPokemon,
    search,
    setSearch,
    limit,
    setLimit,
    offset,
    setOffset,
    isLoading,
    setIsLoading,
}

    return (
        <AppContext.Provider value={states}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;