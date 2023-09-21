import React from "react";
import CardPokemon from "../../moleculas/CardPokemon/CardPokemon";
import "./PokemonContainer.css";
function PokemonContainer({ pokemons }) {
  console.log(pokemons);
  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <CardPokemon
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
