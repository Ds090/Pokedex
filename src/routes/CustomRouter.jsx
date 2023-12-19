import { Routes, Route } from "react-router-dom";
import Pokedex from "../Components/pokedex/Pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";

function CustomRouts() {
    return (
        <Routes>
            <Route path="/" element = {<Pokedex />}/>
            <Route path="/pokemon/:id" element = {<PokemonDetails/>}/>
        </Routes>
    )
}

export default CustomRouts;