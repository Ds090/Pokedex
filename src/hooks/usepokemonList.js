import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
  const [pokemonListstate, SetpokemonListstate] = useState({
    pokemonList: [],
    isloading: true,
    pokidexUrl: `https://pokeapi.co/api/v2/pokemon`,
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadpokemon() {
    // iterating over the array of pokemons, and using their url to create an array of promises
    // that will download those 20 pokemons
      SetpokemonListstate((state) => ({ ...state, isloading: true }));

      const response = await axios.get(pokemonListstate.pokidexUrl); // this downloads list of 20 pokemons

      const pokemonResult = response.data.results; // we get the array of pokemons from result

      console.log("responce is", response.data.pokemon);
      console.log(pokemonListstate);
      SetpokemonListstate((state) => ({
        ...state,
        nextUrl: response.data.next,
        prevUrl: response.data.previous,
      }));
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
      SetpokemonListstate((state) => ({
        ...state,
        pokemonList: res,
        isloading: false,
      }));
    
  }

  useEffect(() => {
    downloadpokemon();
  }, [pokemonListstate.pokidexUrl]);

  return [pokemonListstate, SetpokemonListstate];
}

export default usePokemonList;
