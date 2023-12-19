import "./App.css";
import Pokedex from "./Components/pokedex/Pokedex";
import Search from "./Components/Search/Search";
import PokemonList from "./Components/PokemonList/Pokemonlist";

function App() {
  return (
    <>
    <div className="flex flex-col w-full items-center justify-center">
      <h1><Pokedex/></h1>
      <Search />
    </div>
    <div className=""><PokemonList/></div>
    </>
  );
}

export default App;
