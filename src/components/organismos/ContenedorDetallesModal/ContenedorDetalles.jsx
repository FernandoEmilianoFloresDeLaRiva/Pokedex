import React from "react";
import DetallesModal from "../../moleculas/DetallesModal/DetallesModal";
import "./ContenedorDetalles.css";
import SpanText from "../../atomos/SpanText/SpanText";
import ModalTypes from "../../moleculas/ModalTypes/ModalTypes";

function ContenedorDetalles({ pokemon }) {
  return (
    <div className="contenedor-detalles">
      <DetallesModal categoria="peso:" texto={`${pokemon.weight / 10}kg`} />
      <DetallesModal categoria="altura:" texto={`${pokemon.height / 10}kg`} />
      {pokemon.abilities.map(({ ability }) => {
        return <DetallesModal key={ability.name} categoria="habilidad:" texto={ability.name} />;
      })}

      <div className="types">
        <SpanText texto="Tipos:" clase="asunto-modal" />
        <div className="container-typesM">
          {pokemon.types.map(({ name }) => {
            return (
              <div className={name} key={name}>
                <ModalTypes name={name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContenedorDetalles;
