import React from "react";
import TypeAtom from "../../atomos/TypeAtom/TypeAtom";
import HipervinculeTypes from "../../atomos/HipervinculosTypes/HipervinculeTypes";
import "./TypesNav.css";

function TypesNav({ funcion, types, seeAll }) {
  return (
    <nav className="types-nav">
      {types.map((type) => {
        return (
          <HipervinculeTypes funcion={funcion} key={type.name} name={type.name}>
            <TypeAtom name={type.name}/>
          </HipervinculeTypes>
        );
      })}
      <HipervinculeTypes funcion={seeAll} name="pokeball">
        <TypeAtom name="pokeball"/>
      </HipervinculeTypes>
    </nav>
  );
}

export default TypesNav;
