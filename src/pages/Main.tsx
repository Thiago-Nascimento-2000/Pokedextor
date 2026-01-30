import { CardPokemon } from '../components/Card/CardPokemon';
import { FilterTypePokemon } from '../components/FilterTypePokemon/FilterTypePokemon';
import Pagination from '../components/Pagination/Pagination';

export const Main = () => {
  return (
    <main className='container mx-auto px-19'>
      <FilterTypePokemon />
      <CardPokemon />
      <Pagination />
    </main>
  )
}