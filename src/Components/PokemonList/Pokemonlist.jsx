/* eslint-disable react-hooks/exhaustive-deps */
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usepokemonList";

function PokemonList() {
  
  const [pokemonListstate, SetpokemonListstate] = usePokemonList(false);

  return (
    <div className="m-2 text-xl font-serif font-semibold flex flex-col items-center justify-center flex-wrap">
      <p className="text-center mb-[50px] font-bold text-4xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
        Pokemon List
      </p>

      <div className="flex flex-wrap flex-row justify-around items-center w-[100%]">
        <div className="flex flex-wrap flex-row justify-evenly gap-1 ">
          {pokemonListstate.isloading
            ? "Loading...."
            : pokemonListstate.pokemonList.map((p) => (
                <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
              ))}
        </div>
      </div>

      <div className="text-white space-x-3">
        <button
          className="border py-1 px-4 rounded border-red-800 shadow hover:border-teal-700 hover:shadow-teal-700 transition ease-linear duration-200 delay-150 shadow-red-800 focus:border-teal-700 focus:shadow-teal-700 cursor-pointer"
          disabled={pokemonListstate.prevUrl === null}
          onClick={() => { 
            const urltoset = pokemonListstate.prevUrl;
            SetpokemonListstate({ ...pokemonListstate, pokidexUrl: urltoset})}
          }
        >
          Preview
        </button>
        <button
          className="border py-1 px-4 rounded border-red-800 shadow hover:border-teal-700 hover:shadow-teal-700 transition ease-linear duration-200 delay-150 shadow-red-800 focus:border-teal-700 focus:shadow-teal-700 cursor-pointer"
          disabled={pokemonListstate.nextUrl === null}
          onClick={() => {
            const urltoset = pokemonListstate.nextUrl;
             SetpokemonListstate({ ...pokemonListstate, pokidexUrl: urltoset})}
            }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
