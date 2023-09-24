import React from "react";
import "./HipervinculeTypes.css";

function Hipervincule({ children, name , funcion }) {
  return (
    <a className={name} onClick={() => funcion(name)}>
      {children}
    </a>
  );
}

export default Hipervincule;
