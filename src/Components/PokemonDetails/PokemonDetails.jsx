import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setpokemon] = useState({});

  async function downloadpokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setpokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
    })
  }

  useEffect(() => {
    downloadpokemon();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
        <div className="text-center font-bold text-4xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent h-[50px]">Name: {pokemon.name}</div>
        <img src={pokemon.image} alt="" />
        <div className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">Height: {pokemon.height}</div>
        <div  className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">Weight: {pokemon.weight}</div>
        <div  className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
        </div>

    </div>
  )
}

export default PokemonDetails;
