import React from "react";
import "./ContenedorState.css";
import States from "../../atomos/PokemonStates/States";
function ContenedorState({ pokemon }) {
  return (
    <div className="container-states">
      {pokemon.stats.map((state) => {
        return (
          <div className="states-asunto">
            <States name={pokemon.types[0].name} key={state.stat.name}>
              {state.base_stat}
            </States>
            {state.stat.name}
          </div>
        );
      })}
    </div>
  );
}

export default ContenedorState;
