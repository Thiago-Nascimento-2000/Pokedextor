import { useContext } from "react";
import * as Card from "./Components";
import { CiRuler } from "react-icons/ci";
import { LiaWeightHangingSolid } from "react-icons/lia";
import AppContext from "../../context/AppContext";
import type { AppContextType } from "../../context/Provider";
import { formatPokemonHeight, formatPokemonWeight } from "../../utils/formaterNumber";
import { fetchListPokemons } from "../../api/fetchListPokemons";

export const CardPokemon = () => {
   const { search } = useContext(AppContext) as AppContextType;

    fetchListPokemons();

  return (
    <div className={`flex flex-wrap justify-center md:justify-start my-8`}>
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
