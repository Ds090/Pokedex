import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usepokemonList";

function usePokemonDetails(id) {
  const [pokemon, setpokemon] = useState({});

  async function downloadpokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonofSametypes = axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`)
    setpokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
      similer: (await pokemonofSametypes).data.pokemon.slice(0, 5),
    });
    SetpokemonListstate({...pokemonListstate, type: response.data.types ? response.data.types[0].type.name : ""})
  }

  const [pokemonListstate, SetpokemonListstate] = usePokemonList(true);

  useEffect(() => {
    downloadpokemon();
    console.log("list", pokemon.types, pokemonListstate);
  }, []);

  return [pokemon, pokemonListstate];
}

export default usePokemonDetails;
