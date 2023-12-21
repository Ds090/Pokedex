import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";

function Pokedex() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        
        <Search />
      </div>

      <div className=" ">
        <PokemonList />
      </div>
    </>
  );
}

export default Pokedex;
