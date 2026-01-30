import { CardPokemon } from '../components/Card/CardPokemon';
import { FilterTypePokemon } from '../components/FilterTypePokemon/FilterTypePokemon';

export const Main = () => {
  return (
    <main className='container mx-auto px-19'>
      <FilterTypePokemon />
      <CardPokemon />
    </main>
  )
}