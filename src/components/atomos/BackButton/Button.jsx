import React from "react";
import ImageBack from "../ImageBack/ImageBack";
import "./Button.css";

function Button({ funcion }) {
  const cerrar = (e) => {
    e.preventDefault()
    funcion(false)
  }
  return (
    <button onClick={cerrar}>
      <ImageBack />
    </button>
  );
}

export default Button;
