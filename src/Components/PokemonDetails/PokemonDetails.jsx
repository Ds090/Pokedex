import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usepokemondetails";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <img src={pokemon.image} alt="" />
      <div className="text-center font-bold text-4xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent h-[50px]   tracking-widest font-serif">
        {pokemon.name}
      </div>
      <div className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
        Height: {pokemon.height}
      </div>
      <div className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
        Weight: {pokemon.weight}
      </div>
      <div className="text-center font-bold text-2xl bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent flex gap-5">
        {pokemon.types &&
          pokemon.types.map((t) => (
            <div
              key={t}
              className="border rounded-md py-1 px-3 bg-gray-700 text-white"
            >
              {" "}
              {t}{" "}
            </div>
          ))}
      </div>

      {
        pokemon.types && pokemon.similer && 
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-2xl font-serif font-semibold bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">More {pokemon.types[0]} types pokemons</span>

          <ul className="text-xl font-mono font-semibold bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent">
            {pokemon.similer.map((p) => <li key={p.pokemon.id}>{p.pokemon.name}</li>)}
          </ul>
        </div>
      }
    </div>
  );
}

export default PokemonDetails;
