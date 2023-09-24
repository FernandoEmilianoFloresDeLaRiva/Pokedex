import React, { Suspense, useState } from "react";
import HipervinculeTypes from "../../atomos/HipervinculosTypes/HipervinculeTypes";
import "./PokemonNav.css";
import ContenedorState from "../../organismos/ContenedorState/ContenedorState";
import ContenedorDetalles from "../../organismos/ContenedorDetallesModal/ContenedorDetalles";
import Movimientos from "../../organismos/Movimientos/Movimientos";
import EvolutionContainer from "../../organismos/EvolutionContainer/EvolutionContainer";
import Loading from "../../atomos/Loading/Loading";

function PokemonNav({ pokemon }) {
  const [actualNav, setActualNav] = useState(0);
  const navBar = [
    { id: "Detalles", componente: <ContenedorDetalles pokemon={pokemon} /> },
    { id: "Stats", componente: <ContenedorState pokemon={pokemon} /> },
    { id: "Evoluciones", componente: <EvolutionContainer pokemon={pokemon} /> },
    {
      id: "Movimientos",
      componente: <Movimientos movimientos={pokemon.moves} />,
    },
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
      <div className="contenedor-datos">
        <Suspense fallback={<Loading />}>
          {navBar[actualNav].componente}
        </Suspense>
      </div>
    </>
  );
}

export default PokemonNav;
