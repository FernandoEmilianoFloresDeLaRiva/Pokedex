import React from "react";
import Evolution from "../../moleculas/PokemonEvolution/Evolution";
import "./EvolutionContainer.css";
import { useEvolutions } from "../../../hooks/useEvolutions";
import Loading from "../../atomos/Loading/Loading";
import SpanText from "../../atomos/SpanText/SpanText";
import ImageBack from '../../atomos/ImageBack/ImageBack'

function EvolutionContainer({ pokemon }) {
  const { pokemonEvolution, loading } = useEvolutions(pokemon.name);
  return (
    <>
      {loading ? (
        <Loading />
      ) : pokemonEvolution.length !== 0 ? (
        <>
          {pokemonEvolution.map((pokemonE) => {
            return (
              <div className="container-evolutions" key={pokemonE.current.name}>
                <div className="evolucion">
                  <Evolution
                    src={pokemonE.current.image}
                    name={pokemonE.current.name}
                  />
                  <SpanText
                    texto={pokemonE.current.name}
                    clase="nombre-evolution"
                  />
                </div>
                <div className="arrow">
                  <ImageBack/>
                </div>
                <div className="evolucion">
                  <Evolution
                    src={pokemonE.next.image}
                    name={pokemonE.next.name}
                  />
                  <SpanText texto={pokemonE.next.name} clase="nombre-evolution"/>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>No hay evoluciones</p>
      )}
    </>
  );
}

export default EvolutionContainer;
