import { useState } from "react";
import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {

  const [search, Setsearch] = useState('');

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        
        <Search updateSearch={Setsearch}/>
        {/* {search} */}
      </div>

      <div className=" ">
        {(!search)?<PokemonList />: <PokemonDetails pokemonName={search} key={search}/>}
      </div>
    </>
  );
}

export default Pokedex;
