import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {

    const [pokemonList, SetpokemonList] = useState([]);
    const [isloading, Setloading] = useState(true);

    async function downloadpokemon(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon'); // this downloads list of 20 pokemons

        const pokemonResult = response.data.results; // we get the array of pokemons from result

        console.log(response.data);

        // iterating over the array of pokemons, and using their url to create an array of promises 
        // that will download those 20 pokemons
        const pokemonResultPromiss = pokemonResult.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemondata = await axios.all(pokemonResultPromiss); // array  of 20 pokemon details data
        console.log(pokemondata);

        // now iterate on the data of each pokemon, and extract id, name, image, types
        const res = pokemondata.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
                types: pokemon.types
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
    
      <div className='m-2 text-xl font-serif font-semibold '>
         <p>Pokemon List</p> 
         {(isloading)? "Loading....": 
         pokemonList.map((p) => 
            <Pokemon name={p.name} image={p.image} key={p.id}/>
         )
         }
      </div>
  );
}

export default PokemonList;
