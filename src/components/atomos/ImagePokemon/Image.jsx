import React from "react";
import "./Image.css";

function Image({ img, name }) {
  return <img src={img} alt={name} className="pokemon-image" />;
}

export default Image;
