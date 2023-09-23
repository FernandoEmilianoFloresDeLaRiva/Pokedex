import React, { useContext } from "react";
import CardPokemon from "../../moleculas/CardPokemon/CardPokemon";
import "./PokemonContainer.css";
import { PokemonContext } from "../../../context/PokemonContext";

function PokemonContainer({ pokemonList }) {
  const { setPokemon } = useContext(PokemonContext);

  return (
    <div className="pokemons-container">
      {pokemonList.map((pokemon) => (
        <CardPokemon
          funcion={() => setPokemon(pokemon)}
          key={pokemon.id}
          types={pokemon.types}
          number={pokemon.id}
          nombre={pokemon.name}
          img={pokemon.img}
        />
      ))}
    </div>
  );
}

export default PokemonContainer;
