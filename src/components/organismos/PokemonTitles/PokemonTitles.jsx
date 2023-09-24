import React from "react";
import ModalTypes from "../../moleculas/ModalTypes/ModalTypes";
import SpanText from "../../atomos/SpanText/SpanText";
import "./PokemonTitles.css";

function PokemonTitles({ pokemon }) {
  return (
    <div>
      <SpanText clase="id-number" texto={`#${pokemon.id}`} />
      <SpanText clase="pokemon-name" texto={pokemon.name} />
      <div className="types">
        {pokemon.types.map(({ name }) => {
          return (
            <div className={name} key={name}>
              <ModalTypes name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonTitles;
