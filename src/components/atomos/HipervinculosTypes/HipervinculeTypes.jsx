import React from "react";
import "./HipervinculeTypes.css";

function Hipervincule({ children, name, funcion }) {
  return (
    // onClick={añadir funcion de buscar tipos, la de props}
    <a className={name} onClick={() => funcion(name)}>
      {children}
    </a>
  );
}

export default Hipervincule;
