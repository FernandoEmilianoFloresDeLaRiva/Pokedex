import React, { Suspense, useContext } from "react";
import CardPokemon from "../../moleculas/CardPokemon/CardPokemon";
import Loading from "../../atomos/Loading/Loading";
import "./PokemonContainer.css";
import { PokemonContext } from "../../../context/PokemonContext";

function PokemonContainer({ pokemons }) {
  const { setPokemon } = useContext(PokemonContext);
  return (
    <div className="pokemons-container">
      <Suspense fallback={<Loading />}>
        {pokemons.map((pokemon) => (
          <CardPokemon
            funcion={() => setPokemon(pokemon)}
            key={pokemon.id}
            types={pokemon.types}
            number={pokemon.id}
            nombre={pokemon.name}
            img={pokemon.img}
          />
        ))}
      </Suspense>
    </div>
  );
}

export default PokemonContainer;
