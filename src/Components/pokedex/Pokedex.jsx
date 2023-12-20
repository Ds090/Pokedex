import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";

function Pokedex() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-4xl font-serif font-bold tracking-widest bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
          Pokedex
        </h1>
        <Search />
      </div>

      <div className=" ">
        <PokemonList />
      </div>
    </>
  );
}

export default Pokedex;
