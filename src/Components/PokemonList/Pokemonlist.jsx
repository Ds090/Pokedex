import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, SetpokemonList] = useState([]);
  const [isloading, Setloading] = useState(true);

  async function downloadpokemon() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon"); // this downloads list of 20 pokemons

    const pokemonResult = response.data.results; // we get the array of pokemons from result

    console.log(response.data);

    // iterating over the array of pokemons, and using their url to create an array of promises
    // that will download those 20 pokemons
    const pokemonResultPromiss = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );

    // passing that promise array to axios.all
    const pokemondata = await axios.all(pokemonResultPromiss); // array  of 20 pokemon details data
    console.log(pokemondata);

    // now iterate on the data of each pokemon, and extract id, name, image, types
    const res = pokemondata.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });
    console.log(res);
    SetpokemonList(res);
    Setloading(false);
  }
  useEffect(() => {
    downloadpokemon();
  }, []);

  return (
    <div className="m-2 text-xl font-serif font-semibold flex flex-col items-center justify-center flex-wrap">
      <p className="text-center mb-[50px] font-bold text-4xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">Pokemon List</p>

      <div className="flex flex-wrap flex-row justify-around items-center w-[100%]">
        <div className="flex flex-wrap flex-row justify-evenly gap-1 bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent"> 
          {isloading
            ? "Loading...."
            : pokemonList.map((p) => (
                <Pokemon name={p.name} image={p.image} key={p.id} />
              ))}
        </div>
      </div>

      <div className="text-white space-x-3">
        <button className="border py-1 px-4 rounded border-red-800 shadow hover:border-teal-700 hover:shadow-teal-700 transition ease-linear duration-200 delay-150 shadow-red-800 focus:border-teal-700 focus:shadow-teal-700">Preview</button>
        <button className="border py-1 px-4 rounded border-red-800 shadow hover:border-teal-700 hover:shadow-teal-700 transition ease-linear duration-200 delay-150 shadow-red-800 focus:border-teal-700 focus:shadow-teal-700">Next</button>
      </div>
    </div>
  );
}

export default PokemonList;
