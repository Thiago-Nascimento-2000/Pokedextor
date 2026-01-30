import { CardPokemon } from '../components/Card/CardPokemon';
import { FilterTypePokemon } from '../components/FilterTypePokemon/FilterTypePokemon';

export const Main = () => {
  return (
    <main className='container mx-auto'>
      <FilterTypePokemon />
      <CardPokemon />
    </main>
  )
}