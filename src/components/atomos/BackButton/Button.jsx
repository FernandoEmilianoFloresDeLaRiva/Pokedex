import React from "react";
import ImageBack from "../ImageBack/ImageBack";
import "./Button.css";

function Button({ funcion }) {
  return (
    <button onClick={funcion}>
      <ImageBack />
    </button>
  );
}

export default Button;
