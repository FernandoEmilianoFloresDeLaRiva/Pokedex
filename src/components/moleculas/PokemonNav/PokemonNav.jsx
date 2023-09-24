import React, { useState } from "react";
import HipervinculeTypes from "../../atomos/HipervinculosTypes/HipervinculeTypes";
import "./PokemonNav.css";
import ContenedorState from "../../organismos/ContenedorState/ContenedorState";
import ContenedorDetalles from "../../organismos/ContenedorDetallesModal/ContenedorDetalles";

function PokemonNav({ pokemon }) {
  const [actualNav, setActualNav] = useState(0);
  const navBar = [
    { id: "Detalles", componente: <ContenedorDetalles pokemon={pokemon} /> },
    { id: "Stats", componente: <ContenedorState pokemon={pokemon} /> },
    { id: "Evoluciones" },
    { id: "Habilidades" },
  ];
  return (
    <>
      <nav>
        {navBar.map(({ id }, indice) => {
          return (
            <HipervinculeTypes
              key={indice}
              name="nav-vincule"
              funcion={() => setActualNav(indice)}
            >
              {id}
            </HipervinculeTypes>
          );
        })}
      </nav>
      <div className="contenedor-datos">{navBar[actualNav].componente}</div>
    </>
  );
}

export default PokemonNav;
