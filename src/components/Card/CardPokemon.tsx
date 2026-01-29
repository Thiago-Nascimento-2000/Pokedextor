import { useContext, useEffect } from "react";
import * as Card from "./Components";
import { CiRuler } from "react-icons/ci";
import { LiaWeightHangingSolid } from "react-icons/lia";
import AppContext from "../../context/AppContext";
import type { AppContextType } from "../../context/Provider";

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

export const CardPokemon = () => {

  const { setListPokemon, search } = useContext(AppContext) as AppContextType;

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

  function formatPokemonWeight(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)} T`;
  } else if (value < 1000) {
    return `${(value / 10).toFixed(1)} KG`;
  }
}

function formatPokemonHeight(value: number) {
  if (value) {
    return `${(value / 10).toFixed(1)} M`;
  }
  return "N/A";
}

  return (
    <div className="grid grid-cols-5 m-15">
     { search && search.map((pokemon) => (
        <Card.Container background={pokemon.types[0].type.name === "normal" ? pokemon.types[1]?.type.name : pokemon.types[0].type.name}>
          <Card.PokemonImage
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <Card.PokemonName name={pokemon.name} />
          <Card.ContainerType>
            {pokemon.types.map((typeInfo: { type: { name: any; }; }) => (
              <Card.Type
                type={typeInfo.type.name as any} 
              />
            ))}
          </Card.ContainerType>
          <Card.ContainerInfo>
            <Card.Info label='Altura' value={`${formatPokemonHeight(pokemon.height)}`} icon={<CiRuler />} />
            <Card.Info label='Peso' value={`${formatPokemonWeight(pokemon.weight)}`} icon={<LiaWeightHangingSolid />} />
          </Card.ContainerInfo>
          <Card.ButtonAbout onClick={() => {}} label="Mais detalhes" />
        </Card.Container>
      ))}
    </div>
  );
};
