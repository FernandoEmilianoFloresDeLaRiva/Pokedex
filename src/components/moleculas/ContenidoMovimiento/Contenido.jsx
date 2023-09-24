import React from "react";
import MovimientosPokemon from "../../atomos/MovimientosPokemon/MovimientosPokemon";
import './Contenido.css'

function Contenido({ movimiento, detalles }) {
  return (
    <MovimientosPokemon>
      <summary className="content-moves">{movimiento}</summary>
      <p className="content-moves">{detalles}</p>
    </MovimientosPokemon>
  );
}

export default Contenido;
