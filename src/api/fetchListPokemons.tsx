import { useContext, useEffect } from "react";
import type { AppContextType } from "../context/Provider";
import AppContext from "../context/AppContext";

interface ApiResponse {
  results: any;
  listPokemon: Pokemon[];
}

type Pokemon = {
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    info: {
      height: number;
      weight: number;
    };
    };
    url: string;
  };

const fetchListPokemons = () => {
    const { setListPokemon } = useContext(AppContext) as AppContextType;

          useEffect(() => {
              const fetchPokemonList = async () => {
                const url = "https://pokeapi.co/api/v2/pokemon";
                try {
                  const response = await fetch(url);
                  const data: ApiResponse = await response.json();
          
                  const promisePokemon = Promise.all(
                    data.results.map((pokemon: Pokemon) =>
                      fetch(pokemon.url).then((res) => res.json()),
                    ),
                  );
          
                  setListPokemon(await promisePokemon);
                } catch (error) {
                  console.error("Error fetching Pokémon list:", error);
                }
              };
              fetchPokemonList();
            }, []);
}

export { fetchListPokemons };