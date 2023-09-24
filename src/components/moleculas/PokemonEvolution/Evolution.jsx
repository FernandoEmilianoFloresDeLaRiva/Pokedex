import React from "react";
import ImagePokemon from "../../atomos/ImagePokemon/Image";
import './Evolution.css'

function Evolution({ src, name }) {
  return (
    <div className="container-evolution">
      <ImagePokemon img={src} name={name} />
    </div>
  );
}

export default Evolution;
